import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer className="bg-[#b58b69]  px-4 py-20 ">
                <div className="container ml-14 flex justify-start space-x-10  ">
                    {/* Footer Section 1 */}
                    <div className="footer-section space-y-7">
                        <h4 className="text-black font-semibold">
                            <img src="SHOPLUXE.png" className="h-20 w-auto" alt="Logo" />
                            <br />
                            Happen active county. Winding morning<br></br> ambition shyness evident to poor.<br></br> Because elderly new to the point<br></br> to main success.
                        </h4>
                       
                                <form className="newsletter-form">
                                    <input type="email" placeholder="Enter Your Email" maxlength="2" size="2" className="form-control" name="email" />
                                    
                                </form>
                           
                    </div>
                    <div className="border-1 border-gray-300 h-[300px]"></div>

                    
                
                    {/* Footer Section 2 */}
                    <div className="footer-section space-y-7">
                        <h3 className="text-black font-bold">Explore</h3>
                        <ul className="text-black space-y-2">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Legal Notices</a></li>
                            <li><a href="#">Privacy Notices</a></li>
                            <li><a href="#">Security Information</a></li>
                            <li><a href="#">Trust Center</a></li>
                        </ul>
                    </div>

                
                    {/* Footer Section 3 */}
                    <div className="footer-section space-y-7">
                        <h4 className="text-black font-bold">Recent Posts</h4>
                        <ul className="text-black space-y-2">
                        <li className="flex items-center space-x-3">
                                <img src="footer1.jfif" height="100" width="100" className='rounded-lg' alt="GitHub" />
                                <p className="text-orange-900">Shop From Shopluxe</p></li>

                                <br></br>
                                
                                <li className="flex items-center space-x-3">
                                <img src="footer2.jfif" height="100" width="100" className='rounded-lg' alt="GitHub" />
                                <p className="text-orange-900">Where Style Meets Convenience.</p></li>
                    
                        </ul>
                    </div>
                
                    {/* Footer Section 4 */}
                    <div class="footer-section space-y-7">
    <h4 class="widget-title text-black font-bold">Contact Info</h4>
    <ul className='text-black space-y-2'>
        <li className="flex items-center space-x-3">
            <div className="icon">
                <img src="https://img.icons8.com/?size=48&id=2yfgHA8XGxvd&format=gif" height="20px" width="25px" className='rounded-md' /> 
            </div>
                <strong>Address:AITR Mangliya,Indore</strong>
                
        </li>
        <li className="flex items-center space-x-3">
            <div className="icon">
                <img src="https://img.icons8.com/?size=48&id=tnnUFgHrPmR0&format=gif" height="20px" width="25px" className='rounded-md' />
            </div>
            
                <strong>Email:abc@gmail.com</strong>
        </li>
        <li className="flex items-center space-x-3">
            <div className="icon">
                <img src="https://img.icons8.com/?size=40&id=lCYOZaaeqtKc&format=gif" height="20px" width="25px" className='rounded-md'/>
            </div>
                <strong>Phone:+123 34598768</strong>
                
                
        </li>
    </ul>
</div>
			</div>
             
            </footer>
        </div>
    );
}




