import React from 'react';

import { MDBMask, MDBView, MDBContainer } from "mdbreact";


function LandingPage(props) {
    return (

        <>
   

            <MDBContainer className="mb-5">
            <MDBView>
                {/* https://scx2.b-cdn.net/gfx/news/2020/thisscreengr.jpg */}
                {/* https://www.spaceflightinsider.com/wp-content/uploads/2019/05/Starlink_1078.jpg */}
            {/* <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/42374725534_a653d1b7cb_k_0.jpg" class="img-fluid" alt="Image of ballons flying over canyons with mask pattern one." /> */}
          
          {/* https://c1.staticflickr.com/3/2904/32654666113_ba833971e0_o.jpg */}
            <img src="https://pbs.twimg.com/media/EL9Dd_vWwAEo5Qg.jpg:large" className="img-fluid"/>
            <MDBMask className="flex-center" pattern={8} overlay="red-strong" >
                <p className="black-text">SPACE X</p>
            </MDBMask>
            </MDBView>
            </MDBContainer>

        </>
    );
}

export default LandingPage;
