import React, { useState } from 'react';
import UserInfoProps from '../interfaces/UserInfoProps';
import { ReactComponent as Trash } from '../assets/trash.svg';
import { ReactComponent as Edit } from '../assets/edit.svg';
import { ReactComponent as FormClose } from '../assets/form-close.svg';
import DeleteUser from './DeleteUser';
import FontDropdown from './FontDropdown';

const UserInfo: React.FC<UserInfoProps> = ({ userList, selectedUser, onCloseUserInfo }) => {
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showSignatureForm, setShowSignatureForm] = useState(false);

  const options = ["Dancing Script", "Mr Dafoe", "Great Vibes"];

  const handleOpenDeleteUser = () => {
    setShowDeleteUser(true);
  };

  const handleCloseDeleteUser = () => {
    setShowDeleteUser(false);
  };

  const showViewSignature = () => {
    setShowSignatureForm(true);
  };

  const hideViewSignature = () => {
    setShowSignatureForm(false);
  };

  const fontClass =  selectedUser?.signature?.fontStyle ? selectedUser.signature.fontStyle.toLowerCase().replace(' ', '-') : '';

  return (
    <div>
      <div className={`info-tab ${selectedUser ? 'active' : ''}`}>
        <div className='data'>
          <div className='user-name'>{selectedUser?.name}</div>
          <div className='user-info'>
            DOB:&nbsp;
            <div className='user-info-value'>
              {selectedUser?.dob}
            </div>
          </div>
          <div className='user-info'>
            Phone:&nbsp;
            <div className='user-info-value'>
              {selectedUser?.phone}
            </div>
          </div>
          <div className='user-info'>
            Email:&nbsp;
            <div className='user-info-value'>
              {selectedUser?.email}
            </div>
          </div>
          <div className='icons'>
            <Trash className='icon' onClick={handleOpenDeleteUser} />
            <Edit className='icon' />
            <FormClose onClick={onCloseUserInfo} className='icon' />
          </div>
        </div>
        <hr />

        {showSignatureForm ? (
          <div className='signature-form'>
            <h3 className='signature-form-title'>Add a custom signature</h3>
            <label className='signature-label'>Signature PIN (6 Digits)</label>
            <input type="text" placeholder='Signature PIN' value={selectedUser?.signature?.pin || ""} />
            <label className='signature-label'>Signature Font Style</label>
            <FontDropdown selectedUser={selectedUser} options={options} />
            <label className='signature-label'>Signature Preview</label>
            <div className={`signature-preview ${fontClass}`}>{selectedUser?.signature ? selectedUser?.name : ''}</div>
            <div className='signature-btns'>
              <button className="add-signature-submit" onClick={hideViewSignature} type="submit">Add Signature</button>
              <button className="cancel-signature" onClick={hideViewSignature}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <div className='signature-status-section'>
              <h3 className='signature-status-title'>
                Signature status:
              </h3>
              <div className={`signature-status-info ${selectedUser?.signature ? 'green-info' : 'red-info'}`}>
                {selectedUser?.signature ? 'Has Custom Signature' : 'Missing Custom Signature'}
              </div>
              <button className="signature-view-edit-btn" onClick={showViewSignature}>
                {selectedUser?.signature ? 'View Signature' : 'Add Signature'}
              </button>
            </div>
            <hr />
          </div>
        )}
        {showDeleteUser &&
          <DeleteUser userList={userList} selectedUser={selectedUser} onClose={handleCloseDeleteUser} onDeleteUser={onCloseUserInfo} />}
      </div>
    </div>
  );
};

export default UserInfo;
