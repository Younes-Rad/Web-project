import React from "react";
import "./Profile-sidebar.css";
import {
    Camera, AddCircle, Home, ChartSquare, Activity,
    Gallery, LocationMinus, UserTick, User, Logout
} from "iconsax-reactjs";

function ProfileSidebar({ userData }) {
    
    if (!userData) {
        return null;
    }

    const formattedCredit = userData.account.purchase_credit ? 
        parseInt(userData.account.purchase_credit).toLocaleString('fa-IR') : 0;

    return (
        <>
            <section className="ProfileSidebar-container">

                <div className="ProfileSidebar-person">
                    <div className="ProfileSidebar-person-image">
                        <img src="/Orders-history/person-img.png" alt="person image"/>
                        <div className="ProfileSidebar-person-image-btn">
                            <button>
                                <Camera size="24" color="#ffffff"/>
                            </button>
                        </div>
                    </div>
                    <div className="ProfileSidebar-person-name ppn-text">{`${userData.first_name} ${userData.last_name}`}</div>
                    <div className="ProfileSidebar-person-email">{userData.email}</div>
                </div>

                <div className="ProfileSidebar-lines"></div>
                <div className="ProfileSidebar-info"> 
                    <div className="ProfileSidebar-info-buy">
                        <div id="ProfileSidebar-info-name">
                            <div>اعتبار خرید</div>
                            <button><AddCircle size="24" color="#B95962"/></button>
                        </div>
                        <div>
                            {formattedCredit} تومان
                        </div>
                    </div>
                    <div className="ProfileSidebar-info-buy">
                        <div>تعداد طرح ها</div>
                        <div>{userData.design_count}</div>
                    </div>
                    <div className="ProfileSidebar-info-buy">
                        <div>دنبال کننده ها</div>
                        <div>{userData.follower_count}</div>
                    </div>
                    <div className="ProfileSidebar-info-buy">
                        <div>تعداد سفارش ها</div>
                        <div>{userData.order_count}</div>
                    </div>
                </div>

                <div className="ProfileSidebar-buttons">
                    <div className="ProfileSidebar-buttons-dashbord PBI">
                        <Home size="24" color="#434343"/>
                        <button>داشبورد</button>
                    </div>
                    <div className="ProfileSidebar-lines"></div>
                    <div className="ProfileSidebar-buttons-workTable PBI">
                        <ChartSquare size="24" color="#434343"/>
                        <button>میزکار</button>
                    </div>
                    <div className="ProfileSidebar-lines"></div>
                    <div className="ProfileSidebar-buttons-ordersHistory PBI PBI-active">
                        <Activity size="24" color="#B95962"/>
                        <button>تاریخچه سفارشات</button> 
                    </div>
                    <div className="ProfileSidebar-lines"></div>
                    <div className="ProfileSidebar-buttons-galery PBI"> 
                        <Gallery size="24" color="#434343"/>
                        <button>گالری</button> 
                    </div>
                    <div className="ProfileSidebar-lines"></div>
                    <div className="ProfileSidebar-buttons-addresses PBI">
                        <LocationMinus size="24" color="#434343"/>
                        <button>آدرس ها</button> 
                    </div>
                    <div className="ProfileSidebar-lines"></div>
                    <div className="ProfileSidebar-buttons-followers PBI">
                        <UserTick size="24" color="#434343"/>
                        <button>دنبال شوندگان</button> 
                    </div>
                    <div className="ProfileSidebar-lines"></div>
                    <div className="ProfileSidebar-buttons-userInfo PBI">
                        <User size="24" color="#434343"/>
                        <button>اطلاعات حساب کاربری</button> 
                    </div>
                    <div className="ProfileSidebar-lines"></div>
                    <div className="ProfileSidebar-buttons-exit PBI">
                        <Logout size="24" color="#434343"/>
                        <button>خروج</button> 
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default ProfileSidebar;