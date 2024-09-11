// import Analytics from "./@analytics/page";
// import Notifications from "./@notifications/page";
// import Users from "./@Users/page";
export default function dashboardlayout({
    children,
    Users,
    notifications,
    analytics,
    login
}: {
    children: React.ReactNode,
    Users: React.ReactNode,
    notifications: React.ReactNode,
    analytics: React.ReactNode,
    login:React.ReactNode
}) {
    const isLoggedIn  = true;
  
    return isLoggedIn ? (


        <>

            <div>
                {children}  {/* {content from page.tsx } */}
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{Users}</div>
                    <div>{analytics}</div>
                </div>

                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>

            </div>


        </>





    ) : (
    
        login
      
    );
}