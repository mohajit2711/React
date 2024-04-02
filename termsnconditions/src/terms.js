import React, { useEffect, useState } from 'react';
import xrcicon from "./XRCLogo.svg";
import {Info} from './info'; // Assuming Info.js is in the same directory
import "./terms.scss"

export const Terms = () => {

    const [isTermsChecked, setTermsChecked] = useState(false);
    const [checkDisabled, setCheckDisabled] = useState(true);

    const handleCheck = () => {
        setTermsChecked(!isTermsChecked)
    }

    

    useEffect(() => {
        // Terms and Conditions
        const lastTermsElement = document.querySelector('.terms p:last-child');
        const acceptBtn = document.querySelector('.btn-accept');
        const btnMessage = document.querySelector('.btn-message');

        const termsObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCheckDisabled(false);
                    acceptBtn.classList.add('enabled');
                    acceptBtn.focus();
                    observer.unobserve(lastTermsElement);
                }
            });
        };

        const termsObserverOptions = {
            threshold: 1
        };

        const termsObserver = new IntersectionObserver(termsObserverCallback, termsObserverOptions);
        termsObserver.observe(lastTermsElement);

        const handleAcceptBtnClick = (e) => {
            if (!e.target.classList.contains('enabled')) {
                btnMessage.classList.add('visible');
                setTimeout(() => {
                    btnMessage.classList.remove('visible');
                }, 2000);
            }
        };

        acceptBtn.addEventListener('click', handleAcceptBtnClick);

        // Cleanup function
        return () => {
            termsObserver.disconnect();
            acceptBtn.removeEventListener('click', handleAcceptBtnClick);
        };
    }, []); // Empty dependency array ensures the effect runs only once after initial render

        return (
            <section>
                <div className='Header'>
                    <img className="Logo-terms" src = {xrcicon} alt="XRC Logo"></img>
                    <h1 className="terms-header">Employee Handbook</h1>
                </div>
                <div className="terms-container">
                    {!isTermsChecked && <div className="terms">
                        <h2 styles="text-align:center;">Please read the following carefully</h2>
                        <p>This Employee Handbook ("Handbook") is effective from April 3, 2023 ("Effective Date") and applies to XRC Studios Private Limited, its subsidiaries and joint ventures over which the XRC Studios Private Limited exercises management control ("We", "Us", "Our", "Company"). The Handbook applies to all Employees engaged to provide services to the Company.</p>
                        <p>This Handbook has been created to guide you with the employment policies and practices of the Company. Please read it carefully and if you have any queries, please contact us at the details provided at the end of this handbook.</p>
                        <p>We are glad to have you as a member of XRC Studios Private Limited. As a team member of Company, you are an essential part of the team effort. We hope that you will find your position with the Company rewarding, challenging, and productive.</p>
                        <h3>1. HISTORY</h3>
                        <p>XRC Studios aka XR Central, was incorporated on 04 August 2020. Anshul Agarwal and Shrey Mishra are the founders of the company. XR Central is in the domain of immersive technology designing and development. At XR Central, we work with technologies such as virtual reality, augmented reality, mixed reality, games, learning management system, Metaverse and artificial intelligence.</p>
                        <h3>2. MISSION</h3>
                        <p>XR Central aims to democratize the way immersive experiences, built with extended reality technology, have been created, consumed and operated.</p>
                        <h3>3. IMPORTANT POLICIES</h3>
                        <p>You are expected to follow and comply with the following policies of the Company:</p>
                        <ul>
                            <li>Employee Code of Conduct.</li>
                            <li>Drug Policy.</li>
                            <li>Anti-Discrimination Policy.</li>
                            <li>Social Media Policy.</li>
                            <li>Remote Work Policy.</li>
                            <li>POSH Policy.</li>
                        </ul>
                        <h3>4. PURPOSE</h3>
                        <p>This handbook will help the employees of the Company to familiarize themselves and follow the policies and guidelines of the Company. This handbook does not create any contractual obligations between you and the Company.</p>
                        <p>This handbook is not exhaustive and the Company will have the right to make necessary changes from time to time without any advance notice. This will be supplementary to other guidelines and policies of the Company.</p>
                        <p>Please be informed that this handbook can only highlight and summarize the Company's policies and for detailed information, you can contact the following: Admin or HR.</p>
                        <h3>5. GENERAL CODE OF CONDUCT</h3>
                        <p>Along with other obligations set under this handbook and other applicable policies, you are also required to follow and adhere to the following codes:</p>
                        <ol>
                            <li>Be proactive about performing your duties and responsibilities mentioned under this handbook and the contract signed by you.</li>
                            <li>Decisions made, and actions taken, by you must be consistent with Company values and Company objectives.</li>
                            <li>Company is focused on delivering long-term value to its employees, stakeholders, and society. It is expected that you will do what is right to support the long-term goals of the Company.</li>
                            <li>If you are ever in doubt about a decision, it should be escalated to a higher level of management for broader consideration.</li>
                            <li>Should you see any deviation from the principles mentioned under this handbook, it is expected that you will utilize appropriate channels to report the violation.</li>
                        </ol>
                        
                        <p>See, that wasn’t so difficult! Here are the <em>Leave No Trace Seven Principles</em> by the Center for Outdoor Ethics:</p>
                        <p>The Seven Principles of Leave No Trace provide an easily understood framework of minimum impact practices for anyone visiting the outdoors. Although Leave No Trace has its roots in backcountry settings, the Principles have been adapted so that they can be applied anywhere — from remote wilderness areas, to local parks and even in your own backyard. They also apply to almost every recreational activity. Each Principle covers a specific topic and provides detailed information for minimizing impacts.</p>
                        <h3>6. EQUAL OPPORTUNITY</h3>
                        <ol>
                            <li>
                                <p>Our employment policy is based upon individual merit and qualifications related to professional competence. We also make all reasonable accommodations to meet our obligations under the laws protecting the rights of the disabled.</p>
                            </li>
                            <li>
                                <p>We promote a diverse, inclusive, and equal workplace. Every Employee of the Company is expected to treat everyone with whom We have contact with dignity, courtesy, and respect.</p>
                            </li>
                            <li>
                                <p>We do not discriminate against any person because of their gender, caste, religion, age, nationality, sexual orientation, disability, or any other trait protected by law, concerning any terms of employment such as hiring, promotion, transfer, compensation, and benefits, etc.</p>
                            </li>
                            <li>
                                <p>It is expected that the managers/supervisors shall take employment-related decisions based only on the merit of the person and not discriminate against any person because of their personal characteristics/traits.</p>
                            </li>
                            <li>
                                <p>In accordance with the provisions of the Rights of Persons with Disabilities Act, 2016 and rules thereunder, Company thrives to ensure that the work environment is free from any discrimination against any persons with disabilities and expect the same from all Employees working for the Company.</p>
                            </li>
                        </ol>

                        <h3>7. EMPLOYMENT OF MINORS</h3>
                        <ol>
                            <li>
                                <p>The Company strictly follows the Child Labour (Prohibition and Regulation) Act, 1986 ("CLA") and rules and regulations thereunder. The Act prohibits the engagement of children in certain employments and regulates the conditions of work of children in certain other employments.</p>
                            </li>
                            <li>
                                <p>As per the CLA, a child means a person who is under the age of 14 years. If you or any employee you know falls under the definition of a child, you should immediately inform the HR department.</p>
                            </li>
                        </ol>

                        <h3>8. IMMIGRATION ISSUES</h3>
                        <p>The employees who are immigrants from other countries shall always abide by the rules and regulations issued by the Ministry of Home Affairs (MHA). Any changes or conversion of employment visa shall be intimated to the concerned authorities on time. The newly joined employee shall submit the required documents including a valid employment visa within 3 (three) days from the joining date.</p>

                        <h3>9. COMPLIANCE WITH LAWS</h3>
                        <ol>
                            <li>
                                <p>All the employees are expected to comply with all Company's policies, procedures, and regulations.</p>
                            </li>
                            <li>
                                <p>We are a law-abiding Company and all the Employees of Company are expected to know and understand the legal obligations and act within the bounds of applicable laws, rules, and regulations of the localities where Company do business.</p>
                            </li>
                            <li>
                                <p>Company Employee shall comply with all applicable privacy laws including IT Act, 2000 and the rules thereunder, Consumer Protection Act 2019, General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA) and so on.</p>
                            </li>
                            <li>
                                <p>Company Employee must comply with all localities' anti-corruption laws where the Company does business, including The Prevention of Corruption Act, 1988 in India.</p>
                            </li>
                            <li>
                                <p>Where any provision of the Handbook conflicts or is inconsistent with applicable laws, the provisions of that law must be complied with and override this Handbook.</p>
                            </li>
                            <li>
                                <p>Violation of applicable government laws, rules, and regulations may subject us to individual criminal or civil liability. Such individual violations may also subject the Company to civil or criminal liability, to the loss of reputation or business, and both these events may attract disciplinary action by the Company.</p>
                            </li>
                        </ol>
                        <h3>10. POLITICAL NEUTRALITY</h3>
                        <ol>
                            <li>
                                <p>The Employees have the right to political expression. But in no case, such affiliation shall affect the performance or judgment of the employee while at duty.</p>
                            </li>
                            <li>
                                <p>Participation in political activities must be conducted in the employee's own time and should in no way suggest Company support. Employees may not use Company name, equipment, or resources for making, copying, or distributing political materials or messages.</p>
                            </li>
                            <li>
                                <p>You should not identify yourself as a representative of Company in political activity, nor in any communication on social media or to the media.</p>
                            </li>
                            <li>
                                <p>The Employees are required to act in the course of their duties in a politically neutral manner. This means the employees must keep their jobs out of their politics and their politics out of their jobs.</p>
                            </li>
                        </ol>

                        <h3>11. COMPENSATION</h3>
                        <ol>
                            <li>
                                <p>Your compensation will be as mentioned under the employment agreement entered with you.</p>
                            </li>
                            <li>
                                <p>The Company shall pay employees monthly, less the usual and necessary statutory and other deductions payable in accordance with the Company's standard payroll practices.</p>
                            </li>
                            <li>
                                <p>The payment of salaries will be made as follows: Monthly basis (Directly to account).</p>
                            </li>
                            <li>
                                <p>Compensation increases are given by the Company at its discretion in consideration of various factors, including your performance review.</p>
                            </li>
                        </ol>

                        <h3>12. STATUTORY DEDUCTIONS</h3>
                        <ol>
                            <li>
                                <p>All statutory deductions towards Provident Fund, Professional Tax, TDS, ESIC, etc. shall be affected by the payments made to the employees in accordance with rules and regulations of the government as applicable from time to time.</p>
                            </li>
                            <li>
                                <p>You are required to submit valid documents/proof to inform us about any investments/other schemes under which you are eligible to deduct tax liability. In case, if you fail to submit such proof/claim form within the timeframe provided, the Company will deduct such taxes as mentioned under the applicable statutory laws without any deductions.</p>
                            </li>
                            <li>
                                <p>Each employee will receive a statement that itemizes, among other things, the gross pay, deductions, and the net pay received.</p>
                            </li>
                        </ol>

                        <h3>13. WORK SCHEDULE</h3>
                        <ol>
                            <li>
                                <p>To ensure adequate staffing, positive employee morale, and meet expected productivity standards throughout the organization, you will be held accountable for adhering to your work schedule. In case you are unable to meet the schedules, you must get prior written consent from your supervisor/manager for schedule changes.</p>
                            </li>
                            <li>
                                <p>You will be required to work such hours and schedule as communicated to you by the Company. Your work hours and schedule will be set out in your employment agreement but may be varied in accordance with your employment agreement as reasonably required by us.</p>
                            </li>
                            <li>
                                <p>An Employee is deemed absent when he/she is unavailable for work as assigned/scheduled and such time off was not scheduled/approved in advance by the concerned supervisor/manager.</p>
                            </li>
                            <li>
                                <p>An employee who fails to call in and report to work as scheduled for 7 (seven) consecutive scheduled workdays will be deemed as having abandoned their position and employment may be terminated at the discretion of the Company.</p>
                            </li>
                            <li>
                                <p>Employees who engage in a pattern of frequent or excessive absenteeism or tardiness may be disciplined or terminated, at the Company's sole and exclusive discretion.</p>
                            </li>
                            <li>
                                <p>The following are the specific rules of the Company with regard to the attendance policy:</p>
                                <p>Employees are required to clock 9 hours of working on every working day. Employee shall inform respective managers in case of any absence or unavailability. In case of non-informed leaves, we shall consider that as leave without pay.</p>
                            </li>
                        </ol>

                        <h3>14. OVERTIME</h3>
                        <ol>
                            <li>
                                <p>All employees are required to work 9 (nine) hours per day from Monday to Friday except on the designated holidays where the workplace is located.</p>
                            </li>
                            <li>
                                <p>Both the Company and employees shall endeavour to reduce the overtime works. All overtime must be approved and authorized prior to being worked. Employees required to work overtime will be given advance notice except in emergencies.</p>
                            </li>
                            <li>
                                <p>The overtime calculation and payment is as follows:</p>
                                <p>Certain projects may require overtime or extended days. We shall compensate if employees work on extended days like weekend or holidays. The compensation shall be in form of compensation offs. There are no compensation for overtime.</p>
                            </li>
                        </ol>
                        <h3>15. DEDUCTIONS</h3>
                        <p>The Company reserves the right at any time during your employment, or on termination of employment to deduct from salary any overpayment made and/or money owed to the Company by you. This includes any excess holiday, outstanding loans, advances, and relocation costs.</p>

                        <h3>16. PROBATION PERIOD</h3>
                        <ol>
                            <li>
                                <p>Putting employees under probation is a system to gauge the performance of new entrants, it is the preliminary step in setting the quality of performance among the team. The probation period helps both the Company and employee to assess suitability for employment.</p>
                            </li>
                            <li>
                                <p>For new employees taken as "probationary" the probation period will be as follows: Mostly, 3 Months - 6 Months (this is subject to change based on specific roles and teams within the company).</p>
                            </li>
                            <li>
                                <p>At the end of the probation period, based on periodic feedback, an appraisal would be conducted. If the employee is given a satisfactory rating, he/she will be confirmed in writing. If the work is found unsatisfactory, the probation period may be extended for another period at the discretion of the Company. If the work is found poor the services may be terminated at the discretion of the Company.</p>
                            </li>
                            <li>
                                <p>During the probationary period, employment may be terminated by you or us for any reason whatsoever, with or without cause, after giving the following notice within 7 Days.</p>
                            </li>
                            <li>
                                <p>During the probationary period, the employees may not be eligible for general employee benefits, unless otherwise mentioned in the appointment letter.</p>
                            </li>
                        </ol>

                        <h3>17. TRAINING</h3>
                        <ol>
                            <li>
                                <p>Training is an ongoing process to develop and improve the skills of each employee of the Company. We will arrange both internal and external training sessions from time to time as required.</p>
                            </li>
                            <li>
                                <p>An annual training calendar is drafted based on the training needs and recommendations. Employees will be nominated to various training programs by their own Heads/HR/Management.</p>
                            </li>
                            <li>
                                <p>Training is not limited to formal training sessions but will also include on the job and informal training opportunities like in-house training sessions. Once the application is made by the employee for any external training session, such application will be scrutinized by the Management.</p>
                            </li>
                            <li>
                                <p>Following the external training, employees should share the learning with their team members on a formal level. Employees should submit a copy of the training completion/certification/participation document to Management.</p>
                            </li>
                        </ol>
                        <h3>17. TRAINING</h3>
                        <ol>
                            <li>
                                <p>Training is an ongoing process to develop and improve the skills of each employee of the Company. We will arrange both internal and external training sessions from time to time as required.</p>
                            </li>
                            <li>
                                <p>An annual training calendar is drafted based on the training needs and recommendations. Employees will be nominated to various training programs by their own Heads/HR/Management.</p>
                            </li>
                            <li>
                                <p>Training is not limited to formal training sessions but will also include on the job and informal training opportunities like in-house training sessions. Once the application is made by the employee for any external training session, such application will be scrutinized by the Management.</p>
                            </li>
                            <li>
                                <p>Following the external training, employees should share the learning with their team members on a formal level. Employees should submit a copy of the training completion/certification/participation document to Management.</p>
                            </li>
                        </ol>
                        <h3>19. PERFORMANCE IMPROVEMENT PLAN (PIP)</h3>
                        <ol>
                            <li>
                                <p>At any point during your service with Company, you can be placed under a PIP to assist you in meeting performance standards. It is important for you to understand that failure to meet performance standards on a sustained basis will result in disciplinary action.</p>
                            </li>
                            <li>
                                <p>At the completion of the PIP period, the performance will be reviewed by you and the Company.</p>
                            </li>
                            <li>
                                <p>If your performance is satisfactory during the PIP period, the Company may end the PIP and repost you as a general employee.</p>
                            </li>
                            <li>
                                <p>If your performance is unsatisfactory the Company may either extend the PIP period or may terminate your employment.</p>
                            </li>
                        </ol>

                        <h3>20. GENERAL LEAVE</h3>
                        <ol>
                            <li>
                                <p>In case the employee needs some casual leave, he/she can submit an advance request letter of At least 5 working days to the Direct Managers with a copy to HR/Admin. In case of an emergency, the employee shall inform the Direct Managers with a copy to HR/Admin as soon as possible.</p>
                            </li>
                            <li>
                                <p>All the leave requests must be approved by Company which reserves the right to approve or deny any requests unless otherwise such leaves are sanctioned under the applicable laws.</p>
                            </li>
                            <li>
                                <p>Employees are entitled to those national holidays officially recognized by the government of India.</p>
                            </li>
                            <li>
                                <p>If any employee is found to be engaged in other employment or consulting outside of the Company during the leave, the employee may be considered to have voluntarily resigned from employment with the Company.</p>
                            </li>
                        </ol>
                    </div>}
                    {!isTermsChecked && <div className='Checkbox'>
                        <input 
                        className='btn-accept' 
                        disabled={checkDisabled} 
                        type='checkbox' 
                        checked={isTermsChecked} 
                        onChange={handleCheck}
                        style={{
                            width: '20px', // Reduced width
                            height: '20px', // Reduced height
                            borderRadius: '3px', // Reduced border radius
                            marginRight: '10px', // Adjust margin as needed
                            marginBottom:'10px',
                        }}
                        />
                        <label style={{
                            fontSize: '16px', // Reduced font size
                            lineHeight: '20px', // Match the height of the checkbox
                            paddingTop: '5px',
                        }}>
                            I HAVE READ THE TERMS AND CONDITIONS AND I AGREE TO THE ABOVE.
                        </label>

                    </div>}
                    
                    {isTermsChecked && <div>
                        <Info />
                    </div>} 
                </div>
            </section>
        );
}

