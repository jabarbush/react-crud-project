import React, { useEffect, useState } from 'react';
import UserInfoProps from '../interfaces/UserInfoProps';
import { ReactComponent as Trash } from '../assets/trash.svg';
import { ReactComponent as Edit } from '../assets/edit.svg';
import { ReactComponent as FormClose } from '../assets/form-close.svg';
import DeleteUser from './DeleteUser';
import FontDropdown from './FontDropdown';
import EditUserInfo from './EditUserInfo';
import User from '../interfaces/User';

const UserInfo: React.FC<UserInfoProps> = ({ userList, selectedUser, onCloseUserInfo, setUserList }) => {
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showEditUserInfo, setShowEditUserInfo] = useState(false);
  const [showSignatureForm, setShowSignatureForm] = useState(false);
  const [signaturePin, setSignaturePin] = useState(selectedUser?.signature?.pin || '');
  const [selectedOption, setSelectedOption] = useState('');
  const [updatedSelectedUser, setUpdatedSelectedUser] = useState<User | null>(selectedUser);

  useEffect(() => {
    setSignaturePin(selectedUser?.signature?.pin || '');
    setSelectedOption(selectedUser?.signature?.fontStyle || '');
    setUpdatedSelectedUser(selectedUser);
  }, [selectedUser]);

  const options = ["Dancing Script", "Mr Dafoe", "Great Vibes"];

  const handleOpenDeleteUser = () => {
    setShowDeleteUser(true);
  };

  const handleCloseDeleteUser = () => {
    setShowDeleteUser(false);
  };

  const handleOpenEditUserInfo = () => {
    setShowEditUserInfo(true);
  };

  const showViewSignature = () => {
    setShowSignatureForm(true);
  };

  const hideViewSignature = () => {
    setShowSignatureForm(false);
  };

  const handleAddSignature = () => {
    if (selectedUser) {
      const updatedUser = {
        ...selectedUser,
        signature: {
          pin: signaturePin,
          fontStyle: selectedOption,
        },
      };

      fetch(`http://localhost:3001/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to update user signature.');
          }
        })
        .then(updatedUser => {
          // Update the userList state by replacing the updated user
          setUserList(prevUserList =>
            prevUserList.map(user => (user.id === updatedUser.id ? updatedUser : user))
          );

          // Manually update the selectedUser state if it's the same user
          if (selectedUser.id === updatedUser.id) {
            setUpdatedSelectedUser(updatedUser);
          }

          setShowSignatureForm(false);
        })
        .catch(error => {
          console.error('Error occurred while updating user signature:', error);
        });
    }
  };
  

  const handleFontStyleChange = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    fontClass()
  };

  const fontClass = () => {
    if(selectedOption){
      return selectedOption.toLowerCase().replace(' ', '-');
    }
    else {
      return '';
    }
  }

  return (
    <div>
      <div className={`info-tab ${selectedUser ? 'active' : ''}`}>
        {showEditUserInfo ? (
          <EditUserInfo selectedUser={selectedUser} onCloseEditUserInfo={() => setShowEditUserInfo(false)} />
          ) : (
          <div>
            <div className='data'>
              <div className='user-name'>{selectedUser?.name}</div>
              <div className='user-info'>DOB:&nbsp;
                <div className='user-info-value'>{selectedUser?.dob}</div>
              </div>
              <div className='user-info'>Phone:&nbsp;
                <div className='user-info-value'>{selectedUser?.phone}</div>
              </div>
              <div className='user-info'>Email:&nbsp;
                <div className='user-info-value'>{selectedUser?.email}</div>
              </div>
              <div className='icons'>
                <Trash className='icon' onClick={handleOpenDeleteUser} />
                <Edit className='icon' onClick={handleOpenEditUserInfo} />
                <FormClose className='icon' onClick={onCloseUserInfo} />
              </div>
            </div>
            <hr />

            {showSignatureForm ? (
              <div className='signature-form'>
                <h3 className='signature-form-title'>Add a custom signature</h3>
                <label className='signature-label'>Signature PIN (6 Digits)</label>
                <input
                  type='text'
                  placeholder='Signature PIN'
                  value={signaturePin}
                  onChange={(e) => setSignaturePin(e.target.value)}
                />
                <label className='signature-label'>Signature Font Style</label>
                <FontDropdown
                  selectedUser={selectedUser}
                  options={options}
                  onOptionChange={handleFontStyleChange}
                />
                <label className='signature-label'>Signature Preview</label>
                <div className={`signature-preview ${fontClass()}`}>{selectedUser?.name}</div>
                <div className='signature-btns'>
                  <button className="add-signature-submit" onClick={handleAddSignature} type="submit">Add Signature</button>
                  <button className="cancel-signature" onClick={hideViewSignature}>Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <div className='signature-status-section'>
                  <h3 className='signature-status-title'>Signature status:</h3>
                  <div className={`signature-status-info ${updatedSelectedUser?.signature ? 'green-info' : 'red-info'}`}>
                    {updatedSelectedUser?.signature ? 'Has Custom Signature' : 'Missing Custom Signature'}
                  </div>
                  <button className="signature-view-edit-btn" onClick={showViewSignature}>
                    {selectedUser?.signature ? 'View Signature' : 'Add Signature'}
                  </button>
                </div>
                <hr />
              </div>
            )}
            {showDeleteUser &&
              <DeleteUser userList={userList} selectedUser={selectedUser} onClose={handleCloseDeleteUser} onDeleteUser={onCloseUserInfo} setUserList={setUserList} />}
          </div>
        )}  
      </div>
    </div>
  );
};

export default UserInfo;
