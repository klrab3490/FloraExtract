// imports
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { TiDelete } from "react-icons/ti";

const ProductList = [
    "Andrographis Paniculata Extract",
    "Ashwagandha Extract",
    "Boswellia Serratta Extract",
    "Black Pepper Extract",
    "Brahmi Extract",
    "Cinnamon Extract",
    "Curcumin - Effervescent",
    "Curcumin Ethanol",
    "Curcumin Oil Soluble",
    "Curcumin Powder",
    "Curcumin Powder (Water Dispersible)",
    "Curcumin Stain Free",
    "Curcumin - High Density",
    "Essential Oil of Mustard",
    "Fenugreek Extract",
    "Garcinia Cambogia Extract",
    "Ginger Extract",
    "Green Coffee Extract",
    "Green Tea Extract",
    "Guggul Lipid Extract",
    "Gymnema Sylvestre Extract",
    "Mustard Seed Extract",
    "Pterocarpus Marsupium Extract",
    "Sesame Seed Extract",
    "Tribulus Terrestris",
    "Essential Oil",
    "Oleoresins",
    "Spray Dried Products",
    "Clean Label",
    "BELLY HEALTH",
    "BRAHMI",
    "DAILY BREATH",
    "DAILY GRENADE",
    "DAILY GUARD",
    "DAILY SLUMBER",
    "EVERDAY AMLA",
    "EVERDAY BRAHMI",
    "EVERDAY GREEN TEA",
    "EVERDAY MORINGA",
    "EVERYDAY STAMINA",
    "EVERYDAY TRIPHALA",
    "FLAX OMEGA",
    "FORTY WINKS POWER NAP",
    "JOINT COMFORT",
    "JOINT RELIEF",
    "OMEGA & CUMIN",
    "OMEGA DOUBLE ACTION",
    "OMEGA TRIPLE ACTION",
    "SUGAR CONTROL",
    "Natural Food Color - Green",
    "Natural Food Color - Orange",
    "Natural Food Color - Pink",
    "Natural Food Color - Red",
    "Natural Food Color - Yellow",
    "Natural Preservatives - Bread",
    "Natural Preservatives - Cakes",
    "Natural Preservatives - Fruits & Beverages",
    "Natural Preservatives - Frying Oil",
    "Natural Preservatives - Hummus",
    "Natural Preservatives - Jam & Jellies",
    "Natural Preservatives - Mayonise",
    "Natural Preservatives - Processed Meat",
    "Natural Preservatives - Raw Meat",
    "Natural Preservatives - Sweets",
    "Spices - Biriyani Masala",
    "Spices - Black Pepper",
    "Spices - Chicken Masala",
    "Spices - Chilli Powder",
    "Spices - Cloves (Grambu)",
    "Spices - Coriander Powder",
    "Spices - Fish Masala",
    "Spices - Garam Masala",
    "Spices - Green Cardamom",
    "Spices - Kashmiri Chilli Powder",
    "Spices - Meat Masala",
    "Spices - Rasam Powder",
    "Spices - Sambar Powder",
    "Spices - Split Cassia (Patta)",
    "Spices - Star Anise",
    "Spices - Turmeric Powder"
];

export default function SampleSection() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Contact, setContact] = useState('');
    const [Country, setCountry] = useState('');
    const [Company, setCompany] = useState('');
    const [Position, setPosition] = useState('');
    const [Message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [samples, setSamples] = useState([]);

    // Product
    const updateSample = (e) => {
        const newSamples = [...samples, e.target.value];
        setSamples(newSamples);
    }
    

    // Clear form fields
    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setPosition('');
        setCompany('');
        setCountry('');
        setMessage('');
        setSamples([]);
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const Sample = samples.join(', ');

        const templateParams = {
            first_name: FirstName,
            last_name: LastName,
            email: Email,
            contact: Contact,
            position: Position,
            company: Company,
            country: Country,
            samples: Sample,
            message: Message,
        };
        console.log(templateParams);
    
        emailjs.send(
            import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
            import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID_2,
            templateParams,
            import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsSubmitted(true);
            clearForm();
        }, (error) => {
            console.log('FAILED...', error);
            alert('There is an error in sending the message. Please try again later.');
        });
    };    

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                setIsSubmitted(false);
            }, 3000); // Hide after 3 seconds

            return () => clearTimeout(timer); // Cleanup the timer on component unmount
        }
    }, [isSubmitted]);


    return (
        <div>
            <section>
                <div className='py-5'>
                    <div className='px-4 sm:px-14'>
                        <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                            <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Get Free Samples 
                            </div>
                            <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Get Free Samples
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col-reverse px-4 sm:px-14'>
                        <div className="w-full flex flex-col border-t-[1px] border-[#5e1c0e]">
                            <div className="text-5xl sm:text-7xl w-full text-center p-4">Get in Touch with FloraExtracts</div>
                            {/* form */}
                            <div className="w-full flex sm:p-8 p-4 text-xl">
                                <form onSubmit={handleSubmit} className='w-full bg-[#5ACEA1] rounded-xl sm:p-8 p-4 text-[#290c06]'>
                                    <div className="flex flex-wrap justify-between">
                                        <div className="mb-4 flex-grow mr-4">
                                            <label htmlFor="FirstName" className="block mb-2">First Name</label>
                                            <input autoComplete='on' type="text" id="FirstName" value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" required />
                                        </div>
                                        <div className="mb-4 flex-grow">
                                            <label htmlFor="LastName" className="block mb-2">Last Name</label>
                                            <input autoComplete='on' type="text" id="LastName" value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-between">
                                        <div className="mb-4 flex-grow mr-4">
                                            <label htmlFor="Email" className="block mb-2">Email</label>
                                            <input autoComplete='on' type="email" id="Email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" required />
                                        </div>
                                        <div className="mb-4 flex-grow">
                                            <label htmlFor="Contact" className="block mb-2">Contact</label>
                                            <input autoComplete='on' type="text" id="Contact" value={Contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact Number" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" required />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="Country" className="block mb-2">Country</label>
                                        <input autoComplete='on' type="text" id="Country" value={Country} onChange={(e) => setCountry(e.target.value)} placeholder="Your Country Name" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" />
                                    </div>
                                    <div className="flex flex-wrap justify-between">
                                        <div className="mb-4 flex-grow mr-4">
                                        <label htmlFor="Company" className="block mb-2">Company</label>
                                        <input autoComplete='on' type="text" id="Company" value={Company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" required />
                                        </div>
                                        <div className="mb-4 flex-grow">
                                            <label htmlFor="LastName" className="block mb-2">Position</label>
                                            <input autoComplete='on' type="text" id="Position" value={Position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" required />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="Message" className="block mb-2">Message</label>
                                        <textarea id="Message" value={Message} onChange={(e) => setMessage(e.target.value)} placeholder="Products Required" className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]" rows="5" required ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="Products" className="block mb-2">Samples Products</label>
                                        <select onChange={(e) => updateSample(e)} className="block w-full p-3 rounded-xl border-0 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1]">
                                            <option value="">Select Product</option>
                                            {ProductList.map((product, index) => (
                                                <option key={index} value={product}>{product}</option>
                                            ))}
                                        </select>
                                        {samples.length!=0 && (
                                            <div className="flex flex-wrap bg-[#fdfde1] rounded-xl border-0 mt-2">
                                            {samples.map((sample, index) => (
                                                <div key={index} className="flex p-2 gap-2">
                                                    <div className="flex py-2 px-3 gap-2 items-center justify-center border-red-200 border-[2px] rounded-full">
                                                        <p>{sample}</p>
                                                        <button onClick={() => setSamples(samples.filter((_, i) => i !== index))} className="text-red-500">
                                                            <TiDelete size={"30px"} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        )}
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full p-3 mb-4 rounded-xl border-0 bg-[#fd9b40] scale-95 hover:scale-100 shadow-black">Submit</button>
                                    </div>
                                    <div className={isSubmitted ? 'flex' : 'hidden'}>
                                        {isSubmitted && (
                                            <div className="w-full flex justify-center items-center text-center bg-[#fdfde1] p-3 rounded-xl border-0">
                                                <p className="text-center text-green-500">Message sent successfully!</p>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
