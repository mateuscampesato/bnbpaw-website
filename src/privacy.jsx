
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx";

import { Link } from "react-router-dom";
import { business } from "./business.js"

function PrivacyNotice (){
    return(
        <div className="privacy-page">
            <Navbar />
            <main className="legal-page">
                <header className="legal-page-header">
                    <h1>Privacy notice</h1>
                    <p>How B&amp;B Paw Co. uses your personal information</p>
                </header>
                

                <section className="legal-guide">
                    <h2>B&B Paw Customer Privacy notice</h2>
                    <h3>
                        Contact details 
                    </h3>
                    <p>Email: vittoria.pedroso@gmail.com</p>
                    <h3>
                        What information we collect, use, and why 
                    </h3>
                    <h4>We collect or use the following personal information for dealing with queries, complaints or claims: </h4>
                    <ul>
                        <li>Names and contact details </li>
                    </ul>
                    <h3>
                        Lawful bases and data protection rights 
                    </h3>
                    <h4>
                        Under UK data protection law, we must have a “lawful basis” for collecting and using your personal information. There is a list of possible lawful bases in the UK GDPR. You can find out more about lawful bases on the ICO’s website. 
                        Which lawful basis we rely on may affect your data protection rights which are set out in brief below. You can find out more about your data protection rights and the exemptions which may apply on the ICO’s website:
                    </h4>
                    <ul>
                        <li>
                            Your right of access - You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for. Read more about the right of access.
                        </li>
                        <li>
                            Your right to rectification - You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete. Read more about the right to rectification. 
                        </li>
                        <li>
                            Your right to erasure - You have the right to ask us to delete your personal information. Read more about the right to erasure. 
                        </li>
                        <li>
                            Your right to restriction of processing - You have the right to ask us to limit how we can use your personal information. Read more about the right to restriction of processing. 
                        </li>
                        <li>
                            Your right to object to processing - You have the right to object to the processing of your personal data. Read more about the right to object to processing. 
                        </li>
                        <li>
                            Your right to data portability - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you. 
                        </li>
                        <li>
                            Your right to withdraw consent – When we use consent as our lawful basis you have the right to withdraw your consent at any time. 
                        </li>
                    </ul>
                    <h5>
                        If you make a request, we must respond to you without undue delay and in any event within one month. 
                        To make a data protection rights request, please contact us using the contact details at the top of this privacy notice. 
                    </h5>
                    <h3>Our lawful bases for the collection and use of your data </h3>
                    <h4>
                        Our lawful bases for collecting or using personal information for dealing with queries, complaints or claims are: 
                    </h4>
                    <ul>
                        <li>
                            Contract – we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object. 
                        </li>
                    </ul>
                    <h3>
                        Where we get personal information from 
                    </h3>
                    <ul>
                        <li>
                            Directly from you.
                        </li>
                    </ul>
                    <h3>How long we keep information </h3>
                    <h4>Enquiries that don’t become bookings:</h4>
                    <p>Records are deleted after 12 months from the last contact.</p>
                    <h4>Enquiries that become bookings:</h4>
                    <p>Relevant booking and care records are kept for 6 years after the booking ends as a cautious business-records period, then review and delete them unless there’s a specific reason to retain them longer.</p>
                    <h4>Information about an accident or complaint:</h4>
                    <p>Only the records relevant to handling it are kept. Records are reviewed separately when the matter is resolved and any relevant claim period has passed.</p>
                    <h3>Who we share information with </h3>
                    <h4>Data processors </h4>
                    <p>EmailJS Pte. Ltd. (EmailJS):</p>
                    <p>This data processor does the following activities for us: EmailJS processes information submitted through our website enquiry form and uses it to send the enquiry to B&B Paw Co.’s connected email inbox. This may include the customer’s name, email address, phone number, requested dates and times, and message. </p>
                    <h3>Others we share personal information with </h3>
                    <h4>Other relevant third parties: </h4>
                    <p>Veterinary practices or emergency vets: If a pet becomes ill or injured while in our care, we may share the owner’s contact details and information relevant to the pet’s care. </p>
                    <h3>Sharing information outside the UK </h3>
                    <h4>
                        Where necessary, we will transfer personal information outside of the UK. When doing so, we comply with the UK GDPR, making sure appropriate safeguards are in place. 
                    </h4>
                    <ul>
                        <li>Organisation name: EmailJS Pte. Ltd. (EmailJS) </li>
                        <li>Category of recipient: Email delivery and data processing service provider </li>
                        <li>Country the personal information is sent to: United States </li>
                        <li>How the transfer complies with UK data protection law: Addendum to the EU Standard Contractual Clauses (SCCs).</li>
                    </ul>
                    <h4>Where necessary, our data processors may share personal information outside of the UK. When doing so, they comply with the UK GDPR, making sure appropriate safeguards are in place. </h4>
                    <ul>
                        <li>Organisation name: EmailJS Pte. Ltd. (EmailJS) </li>
                        <li>Category of recipient: Email delivery and data processing service provider </li>
                        <li>Country the personal information is sent to: United States </li>
                        <li>How the transfer complies with UK data protection law: Addendum to the EU Standard Contractual Clauses (SCCs) </li>
                    </ul>
                    <h3>How to complain </h3>
                    <h4>
                        If you have any concerns about our use of your personal information, you can make a data protection complaint to us: 
                    </h4>
                    <ul>
                        <li>Email: vittoria.pedroso@gmail.com </li>
                    </ul>
                    <p>If you remain unhappy with how we’ve used your data after raising a complaint with us, you can also complain to the ICO. The ICO's address:  </p>
                    <ul>
                        <li>ICO Head Office </li>
                        <li>4th Floor, No.3 Circle Square </li>
                        <li>5 Hawkshaw Street </li>
                        <li>Manchester</li>
                        <li>M1 7BL</li>
                        <li>Helpline number: 0303 123 1113</li>
                        <li>Website: https://www.ico.org.uk/make-a-complaint </li>
                    </ul>
                </section>

                <section className="information-type">

                </section>
            
            </main>
            <Footer />
        </div>
    )
}
export default PrivacyNotice;
