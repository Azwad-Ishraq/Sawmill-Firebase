
import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Profile.css'

const Profile = () => {
    const {user} = useAuth()
    
    const {displayName,photoURL} = user;
    console.log(photoURL)
   
    return (
        <div className='profile'>



            <img src={photoURL} alt=""/>
            <h1>Welcome,{displayName}</h1>
            <p>Manage your info, privacy, and security to make Google work better for you. <span style={{color:'blue',cursor:'pointer'}}> Learn more</span></p>

            <div className="profile-items">




                <div className="profile-item">
                    <img src="https://www.gstatic.com/identity/boq/accountsettingsmobile/dataandpersonalization_icon_96x96_cdb6dff2e31ed6745ece4662231bfd48.png" alt=""/>

                    <div className="profile-text">
                    <h3>Privacy & Personalization</h3>
                    <p>See the data in your Sawmill Account and choose what activity is saved to personalize your Sawmill experience</p>
                    </div>
                    <button className='profile-btn'>Manage Your Data & Privacy</button>
                </div>

                
                <div className="profile-item">
                    <img src="https://www.gstatic.com/identity/boq/accountsettingsmobile/securitycheckup_yellow_96x96_8a13298be6a17ecf51cdf9baad9c74f1.png" alt=""/>

                    <div className="profile-text">
                    <h3>Privacy & Personalization</h3>
                    <p>See the data in your Sawmill Account and choose what activity is saved to personalize your Sawmill experience</p>
                    </div>
                    <button className='profile-btn'>Protect Your Account</button>
                </div>



                



                <div className="profile-item">
                    <img src="https://www.gstatic.com/identity/boq/accountsettingsmobile/googleonestorage_spot_288x288_497a45ae778f9cba44cf68a930e19b23.png" alt=""/>

                    <div className="profile-text">
                    <h3>Account & Storage</h3>
                    <p>Your account storage is shared across Google services, like Drive, Gmail, and Photos</p>
                    </div>
                    <button className='profile-btn'>Manage Storage</button>
                </div>



                <div className="profile-item">
                    <img src="https://www.gstatic.com/identity/boq/accountsettingsmobile/privacycheckup_initial_384x384_cb8132eb15fcf1e171853d9b7a7a64ab.png" alt=""/>

                    <div className="profile-text">
                    <h3>Take the Privacy Checkup</h3>
                    <p>This step-by-step guide helps you choose the privacy settings that are right for you</p>
                    </div>
                    <button className='profile-btn'>Get Started</button>
                </div>




            </div>


        </div>
    );
};

export default Profile;