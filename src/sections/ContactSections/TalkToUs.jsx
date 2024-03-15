// imports
import { useState } from 'react';

// icons
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdMail, IoIosCall, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io';

export default function TalkToUs() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Contact, setContact] = useState('');
    const [Company, setCompany] = useState('');
    const [Country, setCountry] = useState('');
    const [Message, setMessage] = useState(''); 

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setCompany('');
        setCountry('');
        setMessage('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Messages = `
            Name: ${FirstName} ${LastName}
            Email: ${Email}
            Contact: ${Contact}
            Company: ${Company}
            Country: ${Country}
            Message: ${Message}
        `
        console.log(Messages);
        clearForm();
    };

    return (
        <div>
            <section>
                <div className='py-5'>
                    <div className='px-4 sm:px-14'>
                        <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                            <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Talk With Us 
                            </div>
                            <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Talk With Us 
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col px-4 sm:px-14'>
                        <div className="lg:w-1/2 w-full flex flex-col lg:border-r-[1px] border-t-[1px] border-[#5e1c0e]">
                            <div className="text-5xl sm:text-7xl w-full text-center p-4">Get in Touch with FloraExtracts</div>
                            <div className='flex sm:flex-row flex-col border-y-[1px] border-[#5e1c0e] p-3'>
                                <div className="flex flex-col sm:items-start items-center justify-center sm:border-r-[1px] sm:border-[#5e1c0e] sm:w-1/3 w-full">
                                    <div className='flex'>
                                        <a href='mailto:sales@floraextracts.in' className="text-l flex items-center justify-center rounded-xl p-1 px-2 bg-[#5ACEA1]"> <IoMdMail className='mr-2 flex items-center justify-center' />sales@floraextracts.in</a>
                                    </div>
                                    <div className='flex mt-2'>
                                        <a href='tel:+971551390166' className="text-l flex items-center justify-center rounded-xl p-1 px-2 bg-[#5ACEA1]"> <IoIosCall className='mr-2 flex items-center justify-center' />+971 55 139 0166</a>
                                    </div>
                                    <div className='flex mt-2 gap-2'>
                                        <a href='https://twitter.com/FloraExtracts' className="text-l flex items-center justify-center rounded-xl p-2 bg-[#5ACEA1]"> <FaXTwitter /> </a>
                                        <a href='https://www.instagram.com/floraextracts/' className="text-l flex items-center justify-center rounded-xl p-2 bg-[#5ACEA1]"> <IoLogoInstagram size={20}/> </a>
                                        <a href='https://api.whatsapp.com/send/?phone=971551390166&text=Hi&type=phone_number&app_absent=0' className="text-l flex items-center justify-center rounded-xl p-2 bg-[#5ACEA1]"> <IoLogoWhatsapp size={20}/> </a>                                        
                                    </div>
                                </div>
                                <div className="flex justify-center sm:border-r-[1px] sm:border-[#5e1c0e] items-center sm:w-1/3 w-full p-3 sm:p-0">
                                </div>
                                <div className="flex justify-center items-center sm:w-1/3 w-full p-3 sm:p-0">
                                    <div className="text-l rounded-xl p-1 px-2 bg-[#5ACEA1]">Blue Tower ,<br /> Opp. Future of Museum ,<br /> Sheikh Zayed Road ,<br /> Dubai ,<br /> UAE</div>
                                </div>
                            </div>
                            {/* Map */}
                            <div className='w-full h-full p-3'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4661737835536!2d55.280739!3d25.221218999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42f2869516b3%3A0xad7ca6161b149e91!2sHHHR%20Tower%20-%20Trade%20Centre%20-%20Trade%20Centre%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1709389682177!5m2!1sen!2sin" className='w-full h-full rounded-xl' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        {/* form */}
                        <div className="lg:w-1/2 w-full flex sm:p-8 p-4 text-xl border-0 lg:border-t-[1px] border-[#5e1c0e]">
                            <form onSubmit={handleSubmit} className='w-full bg-[#5ACEA1] rounded-xl sm:p-8 p-4 text-[#290c06]'>
                                <div className="flex flex-wrap justify-between">
                                    <div className="mb-4 flex-grow mr-4">
                                        <label htmlFor="FirstName" className="block mb-2">First Name</label>
                                        <input autoComplete='on' type="text" id="FirstName" value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Your First Name" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" />
                                    </div>
                                    <div className="mb-4 flex-grow">
                                        <label htmlFor="LastName" className="block mb-2">Last Name</label>
                                        <input autoComplete='on' type="text" id="LastName" value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="Your Last Name" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="Email" className="block mb-2">Email</label>
                                    <input autoComplete='on' type="email" id="Email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="Contact" className="block mb-2">Contact</label>
                                    <input autoComplete='on' type="text" 
                                        id="Contact" value={Contact} onChange={(e) => setContact(e.target.value)} placeholder="Your Contact Number" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="Company" className="block mb-2">Company</label>
                                    <input autoComplete='on' type="text" id="Company" value={Company} onChange={(e) => setCompany(e.target.value)} placeholder="Your Company Name" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="Country" className="block mb-2">Country</label>
                                    <input autoComplete='on' type="text" id="Country" value={Country} onChange={(e) => setCountry(e.target.value)} placeholder="Your Country Name" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="Message" className="block mb-2">Message</label>
                                    <textarea id="Message" value={Message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" rows="5"></textarea>
                                </div>
                                <button type="submit" className="w-full p-3 rounded-xl border-0 bg-[#fd9b40] hover:scale-105 shadow-black">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
