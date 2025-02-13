import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import our_policy from '../images/our-policy.avif'
import Footer from "../components/Footer";

const OurPolicy = () => {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const handleToggle = (index) => {
        setActiveIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    

    const content = [
        {
            title: `<h1>Refund &amp; Cancellation</h1>`,
            data: `<p>There is no Contract between the Yatra of Himalayas and the client until the our Company has received the initial deposit amount per person as specified for each tour package. The full payment must be received in accordance with procedures laid down under Payments Terms. If not paid in that time, the company reserves the right to cancel the booking with consequent loss of deposit and apply scale of cancellation charges as mentioned in the cancellation policy hereunder.</p>
                        <ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; To terminate the Contract after acceptance of the deposit but prior to the Commencement of Tour without assigning any reason whatsoever. In the event, the Yatra of Himalayas terminates the Contract, the Yatra of Himalayas Tour shall refund the initial deposit amount without paying of any interest.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; To amend, alter, vary or withdraw any tour, holiday, excursion or facility it has advertised or published or to substitute an Independent Contractor of similar className if it is deemed advisable or necessary. In either case, the Yatra of Himalayas shall not be liable for any damage, additional expense, or consequential loss suffered by the Clients or for any compensation claims made.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; It is clear understanding between either parties that any loss arising on account of cancellation of flight / train / bus tickets booked by the Clients; either through the Yatra of Himalayas or on his/her own or through a third party, the Yatra of Himalayas Tour shall not be liable for such losses or additional expense, or consequential loss suffered by the Clien</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; No person other than the Yatra of Himalayas , in writing, has the authority to vary, add, amplify or waive any stipulation, representation, term or condition in this brochure.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  In the event of the Yatra of Himalayas exercising its rights to amend or alter any of the services as mentioned in the itinerary, after such tour or holiday has been booked, the Client shall have the right:</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  To continue with the tour or holiday as amended or altered.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; To accept any alternative tour or holiday which the company may offer.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; In either of these above cases the Client shall not be entitled to, or the Company shall not be liable to the Client for any damage. Additional expense, consequential loss suffered by him or to pay any amount as refund.</p></li>

                        </ul>`
        },
        {
            title: `<h1>Amendments / Cancellation By the Client</h1>`,
            data: `<p>If the Client is willing to amend or cancel his/her booking because of whatsoever reasons including death, accident, illness, or any other personal reasons including non-payment of the balance payment, the Company is liable to recover Cancellation charges from the Client.All cancellations are to be communicated in written and advance amount is non refundable, besides the forfeiture of the deposit amount of the tour, a further charge will be levied as follows:-
                        </p>
                        <ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  25% cancellation of the package cost after confirmation/issuing the hotel voucher.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; 30 days prior to departure of the tour, advance amount is non refundable, advance will be charged.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  29 days to 15 days prior to departure of the tour 50% of total tour cost.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; 14 days to 08 days prior to departure of the tour 75% of total tour cost.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   07 days to 01 days prior to departure of the tour 100% of total tour cost.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  There will be no refund for NO SHOWS.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Any amendment in the original booking has to be given to us in writing. All changes will be processed only after the receipt of the same by the Company. However, if any of the amendment requests results in cancellation of one or more services, then the Company is liable to recover cancellation charges as indicated in the above-mentioned table.</p></li>

                        </ul>`
        },
        {
            title: `<h1>Terms &amp; Conditions</h1>`,
            data: `<p>The following terms and conditions apply, however regional circumstances and regulations, contractual obligations, and matters relating to location, Tour type and services logistics may cause these to be varied slightly for specific Tours, or specific destinations. These amendments and alterations are shown in the Terms And Conditions sections, and should be read in conjunction with the Terms And Conditions shown below.
                        </p>
                        <ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Travel arrangements and prices detailed on our web sites are provided and coordinated by Yatra of Himalayas .</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Yatra of Himalayas has taken due care and responsibility to verify and check all information on our web sites as at the time of compilation, however, as this information is supplied by the relevant accommodation &amp; tour operators in our brochures, it accepts no responsibility for any inaccuracy or miss description contained in the publications.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Sales of services as contained in our publications are made by Yatra of Himalayas only as agent for the person, business or company providing the services. The standards of accommodation and other services chosen are based on various factors, which are generally accepted as indicative of a certain className.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Yatra of Himalayas does not accept responsibility for any change in prices or variation of services as shown, and all services and prices are subject to change without notice.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   Yatra of Himalayas does not accept any liability of whatever nature for the acts, omissions or default, whether negligent or otherwise, of those service providers in connections with your convention pursuant to a contract between them and yourselves and over whom we have no direct control. We do not accept liability in contract or in tort (actionable wrong) for any injury, damage, loss, delay, additional expenses or inconvenience caused directly or indirectly by force majeure or other events which are beyond our control, or which are not preventable by reasonable diligence on our part including, but not limited to war, civil disturbance, fire, floods, unusually severe weather, acts of God, acts of Government or of any other authorities, accidents to or failure of machinery or equipment or industrial action.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   It is essential that you check with us, or your travel agent, for any changes or variations to the information shown on our web sites. This will allow us to advise you, or your agent, of any such changes that we are aware of either before you book your holiday, or prior to your departure.</p></li>

                        </ul>`
        },
        {
            title: `<h1>Terms and Conditions of Booking</h1>`,
            data: `<ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Rates and Price Variations: We reserve the right to vary prices and rates in the event of changes in exchange rates or price rises made by wholesalers or other suppliers. If the cost of any service increases due to exchange rate fluctuations, price increases, tax changes or any other reason, you are required to pay the increase when notified by us or you may cancel the booking which may result in cancellation fees. We are not liable in any way if any increase occurs. Rates quoted are appropriate to the particular product at the time of quoting and these rates may change prior to the travel date. All prices are subject to availability and can be withdrawn or varied without notice.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Deposits via Bank Account &amp; Credit Card: Bookings of Tour Packages within 45 days will be required to pay the full amount at the time of confirmation. The appropriate amount will automatically be debited to the credit card provided or can be transferred into our bank account directly. Any booking not deposited with us by this time will automatically cancel without notification. Deposit conditions for certain accommodation and tour packages may vary, these are listed on the individual page. We will advise you in writing of these conditions at the time of booking. Bookings over Christmas and New Years (Festive Season) require a non refundable deposit of between 3000 &amp; 5000, and final payment 60 days prior.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Final Payment: Final payment must be paid immediately when requested 30 days prior to travel date. No vouchers will be issued until final payment is received in our office or in our company’s bank account provided by us through mail or updated on Yatra of Himalayas website. Final payment conditions for certain accommodation and tour packages may vary, these are shown on the individual pages. We will advise you in writing of these conditions at the time of booking. Please note the final payment may vary from the original booking price or quote if the product is subject to exchange rate fluctuations or price rises by wholesalers or other suppliers.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Card Fees: Please note that a card fee will be applied automatically to credit card payment amounts: 3% -Master, visacard, Debit card visa master card 3% for transaction size above INR 2000/- and 2% for transaction size bellow INR 2000/- and for net banking option it will be 2% This fee covers a range of costs associated with processing bookings paid for by credit card including the merchant fees of the various credit card companies, payment processing costs, administration costs, the cost of maintaining IT systems used for payment security to minimize credit card fraud, credit card charge backs and associated fees.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   Cheque payments: Will only be accepted for bookings travelling outside 50 days.Payments made by cheque or direct deposit do not attract any fees.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   Payment Processing Terms &amp; Conditions: By providing your credit card details and accepting our Terms &amp; Conditions, you authorise Yatra of Himalayas to arrange for funds to be debited from your nominated credit card, in accordance with the terms &amp; conditions of the Direct Debit Request Service Agreement as amended from time to time.Your bank or credit card provider may apply currency conversion fees. Credit Cards are required to secure bookings if you are travelling within 14 days.</p></li>

                        </ul>`
        },
        {
           title: `<h1>Standard Refund/Cancellation Policy</h1>`,
           data: ` <ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   All Bookings cancelled inside 7 days prior to travel are full package cost will be charged.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Bookings cancelled 8 to 14 days prior to travel - The 75% of the total package cost will be charged.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Bookings cancelled 14 to 29 days prior to travel - The 50% of the total package cost will be charged.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Bookings cancelled 30 days prior to travel advance amount will be for fit, non refundable.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   Cancellations must be in writing and should be addressed to the consultant handling the booking.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   A Travel Consultant will help you wherever possible within these terms and conditions.</p></li>

                        </ul>`
        },
        {
            title: `<h1>General</h1>`,
            data: `<ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Validity of Rates: Prices are valid for the dates indicated.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Currency: All rates are quoted in Indian National Rupees, or as otherwise indicated.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Children's Rates: Child costs are based on sharing a room with adults and using existing bedding . Cost for additional bedding are available on request.
                            Payment Options Yatra of Himalayas offers a secure server for your credit card payments. Alternatively, you can fax through your credit card details to us, send a cheque or make a direct deposit. 50% of the total package cost will need to be deposited by the guests for confirm services.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Accommodation: Accommodation costs are shown in INR, unless otherwise stated. We reserve the right to offer alternative accommodation of a similar standard in the case the accommodation operator overbooks their property or for any reason beyond our control. All rates are subject to change without notice. Not all properties provide instant availability and in these cases Yatra of Himalayas checks availability once we receive the booking request.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   
                            Check In / Check Out Times: These vary according to operator. Generally your accommodation check in is 12 Noon and check out 10am. Please note that most properties will require a valid id proof on check-in and may need to see photo identification. Early check in and late check out will be subject to availability in the hotel and it may be charged by the hotel directly.</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   Single Supplement Costs: If not shown in your selected accommodation cost, this is available on application.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;Group And Incentive Travel: As group and conference rates are specially contracted rates specific for that particular group, they have different terms and conditions to standard holidays. If you are booking a group or incentive, please ensure that these conditions are explained to you.All maps, photographs, illustrations and computer based graphics are included for general purposes only and are not always indicative of the subject matter. Hotel room photographs (graphics) may not be specific to the actual room occupied. Maps are not to scale.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;   Quotations: All quotations are subject to availability of services quoted and are not guaranteed until the booking is confirmed and deposit received. Quotes are valid for 48 hours from issue date.
                            </p></li>

                        </ul>`
        },
        {
            title: `<h1>Inclusions and Exclusions</h1>`,
            data: `<ul>
                            <h3 style="margin-left:18px; font-size: 16px;margin-top: 8px;">Prices DO Include:</h3>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;  Detailed schedule and services mailed to you through mail or currier.</p></li>
                            <h3 style="margin-left:18px; font-size: 16px;margin-top: 8px;">Prices DO Not Include:</h3>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Any costs incurred en route to and from the destination.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Meals (unless specified), alcoholic beverages, telephone calls.
                            </p></li>
                           <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Items of a personal nature, and personal services not specified as being included in costs on the relevant web pages for each suppliers product. Rates do not include Monuments Park Charges.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Additional personal use of vehicle, any extra sight seeing apart from the specified itinerary given.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Any incidental and other expenses which are not specified in the mail given to you.
                            </p></li>

                        </ul>`
        },
        {
            title: `<h1>Site Copyright</h1>`,
            data: `<ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; The copyright on all original/custom artwork, maps, navigation elements, presentation methods and design elements included in our web sites is held exclusively by Yatra of Himalayas Copyright on all descriptive text is held by Yatra of Himalayas Copyright on selected photographic images is also held by Yatra of Himalayas .</p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Photographic images are reproduced with the permission of Yatra of Himalayas and the product and/or service providers represented on the web site, or as shown where necessary to satisfy the copyright obligations associated with their electronic reproduction.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Where joint copyright is held over proprietary text or images, Yatra of Himalayas reserves the right to pursue all copyright infringements on behalf of the primary copyright holder. Where the copyright for a photographic image is held exclusively by a third party under licence, Yatra of Himalayas reserves the right to vigorously protect the copyright of those images on behalf of the third party.

                            </p></li>
                           <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; All HTML files used in Yatra of Himalayas web sites are declared to be proprietary software product developed for use by Yatra of Himalayas only, and as such are subject to international intellectual property conventions.

                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; All custom graphics used are declared to be works of art created for use by Yatra of Himalayas only, and as such are subject to international intellectual property conventions. Image files, HTML documents, and text files are not to be relocated to another server, or duplicated for commercial purposes without the express written permission of Yatra of Himalayas .
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; 
                            Yatra of Himalayas trading under its subsidiary business names, is registered with Himachal Pradesh tourism corporation Regional Tourism Authorities, and as such exercises the right to reproduce images made available by these various organizations to their members for the purpose of generic and/or specific tourism promotion.
                            </p></li>

                        </ul>`
        },
        {
            title: `<h1>Law and Jurisdiction</h1>`,
            data: `<ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;All the complaints, suits, claims or dispute of whatsoever nature relating to any producing including tour by the company and third party products and tours, the courts and tribunals in different location guest traveling in India alone shall have exclusive jurisdiction. All tours are subject to laws, rules of RBI/Govt. of India upon receiving the booking mail, the above-mentioned terms &amp; condition shall be binding on both the company and the guest and shall become the only basis of relations between the parties and all previous communications in whatsoever form or mode whether oral or otherwise, With respect to any terms and conditions of the tour and services shall stand cancelled/revoked/terminated.

                            I/We have read and accepted the above-mentioned terms &amp; conditions on behalf of the person(s) whose name appears in booking form/mail and I am/We are aware that I/We shall be abide by the same. Please contact us if you have any further queries about our security, privacy or data handling procedures.</p></li>
                        </ul>`
        },
        {
            title: `<h1>Privacy Policy : Notice.</h1>`,
            data: `<ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;When we collect your personal information, we'll give you timely and appropriate notice describing what personal information we're collecting, how we'll use it, and the types of third parties with whom we may share it.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Choice. We'll give you choices about the ways we use and share your personal information, and we'll respect the choices you make.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Relevance. We'll collect only as much personal information as we need for specific, identified purposes, and we won't use it for other purposes without obtaining your consent.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;Retention. We'll keep your personal information only as long as we need it for the purposes for which we collected it, or as permitted by law.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;Accuracy. We'll take appropriate steps to make sure the personal information in our records is accurate.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Access. We'll provide ways for you to access your personal information, as required by law, so you can correct inaccuracies.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;Security. We'll take appropriate physical, technical, and organizational measures to protect your personal information from loss, misuse, unauthorized access or disclosure, alteration, and destruction.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Sharing. Except as described in this Policy, we won't share your personal information with third parties without your consent.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;International Transfer. If we transfer your personal information to another country, we'll take appropriate measures to protect your privacy and the personal information we transfer.
                            </p></li>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp; Enforcement. We'll regularly review how we're meeting these privacy promises, and we'll provide an independent way to resolve complaints about our privacy practices.
                                To access your information, ask questions about our privacy practices, change your marketing preferences or issue a complaint, contact us at: <span style="color: crimson;font-weight: bold;">yatraofhimalayas@gmail.com</span>
                            </p></li>
                        </ul>`
        },
        {
            title: `<h1>Scope of this Policy</h1>`,
            data: `<ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;This Privacy Policy describes how we protect your privacy when you use our website or use our services. This Policy includes our ten Privacy Promises above and the answers to Frequently Asked Questions About Our Privacy Practices provided below. This Policy may be supplemented or amended from time to time.
                        </p></li>
                    </ul>`
        },
        {
            title: `<h1>Your Consent to This Policy</h1>`,
            data: `<ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;This Policy is part of the Terms and Conditions of Yatra of Himalayas Group, Franchise, and its affiliates. To review our Terms and Conditions, By using our Site or services, you are expressly agreeing to our Terms and Conditions, including the terms of this Policy
                        </p></li>
                    </ul>`
        },
        {
            title: `<h1>Who are we?</h1>`,
            data: ` <ul>
                            <li><p><i class="fa-regular fa-circle-right"></i>&nbsp;Yatra of Himalayas is one stop full Travels service Shop. Familiar to our Guests. Situated in Shimla with its head office, and 3+ branch offices in different major cities of India. Yatra of Himalayas steps in with there experience and quality assistance. Our range of services includes-Hotel bookings,Holidays Packages,Honeymoon Packages, Group bookings,Corporate conference bookings, educational group tours for students,Bus and car hire, Adventure sports activities that includes-Trekking, Mountain climbing, White water rafting, river crossing, paragliding, skiing, expeditions etc. and Yatra of Himalayas can also customize the package according to the requirement of their guests, If you would like to learn the privacy policy of a specific travel agency, please contact that agency.
                        </p></li></ul>`
        }
    ]

   

  return (
   <>
   <Navbar />
   <section class="our-policy">
      <div class="our-policy-columns">
        
        {/* Left: Image & Title */}
        <div class="our-policy-image">
          <h1>Our Policy...</h1>
          <img
            src={our_policy}
            alt="Our_policy_image "
            class="our-policy-img"
          />
        </div>

        {/* Right: Policy Content */}
        <div  class="our-policy-contents">
            {content.map((value, index) => (
                    <div  key={index}
                    className={`our-policy-content-Box ${activeIndexes.includes(index) ? "active" : ""}`}
                    onClick={() => handleToggle(index)}>
                    <div class="our-policy-title" dangerouslySetInnerHTML={{__html: value.title}}></div>
                    <div class="our-policy-data" dangerouslySetInnerHTML={{__html: value.data}}>
                        
                    </div>
                </div>
            ))}  
        </div>
      </div>
    </section>
    <Footer />
   </>
  );
};

export default OurPolicy;
