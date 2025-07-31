import React from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import logo from '../images/Netflix_Symbol_RGB.png'

function Policy({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-[#1e1d1d9c] backdrop-blur-sm z-5 overflow-y-auto" onClick={onClose}>
            <div className='relative bg-[#101010] w-full max-w-7xl mx-2 md:mx-auto md:my-20 px-5 md:px-20 py-20 md:pt-40 md:mb-20 rounded-2xl flex flex-col gap-y-5'>
                <div className='absolute right-10 top-10'>
                    <X onClick={onClose} className='text-white border-2 rounded-full hover:text-red-500' size={30} />
                </div>
                <div className='text-white grid grid-cols-1 md:grid-cols-2 gap-x-0 mb-5'>
                    <h1 className='text-xl md:text-5xl font-semibold'>Netflix Brand Assets Terms & Conditions</h1>
                    <p className='text-justify text-[13px] md:text-[18px]'>By downloading or otherwise receiving from Netflix any Netflix trademarks, logos, trade names, service marks, service names, or other distinctive features owned by Netflix (“Netflix Brand Assets”) via the Netflix Brand Site, located at brand.netflix.com, or other Netflix website, or otherwise from Netflix, you (“You”) agree to be bound by the following terms and conditions (“Terms”). In the event of any conflict between these Terms and any applicable written agreement between You and Netflix, the written agreement shall prevail.</p>
                </div>
                <div className='text-white text-justify flex flex-col gap-y-5 mb-5'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Your Rights To Use Netflix Brand Assets</h1>
                    <p className='text-[13px] md:text-[18px]'>Netflix grants You a limited, non-exclusive, revocable, non-sublicensable and non-transferable license to display the Netflix Brand Assets in accordance with these Terms. All use by You of the Netflix Brand Assets (including any goodwill associated therewith) shall inure to the benefit of Netflix. You agree that You shall not challenge, or assist others to challenge, the Netflix Brand Assets or the registration or ownership thereof by Netflix (except to the extent such restriction is prohibited by applicable law), or attempt to register any Netflix Brand Assets or other names, logos, marks, or materials (including domain names) that are confusingly similar in any way (including but not limited to, sound, appearance and spelling) to any Netflix Brand Assets. The Netflix Brand Assets are provided "as is" and Netflix disclaims all express and implied warranties, including warranties of noninfringement. Netflix shall not be liable to You under any theory of liability for any direct, indirect, incidental, special, consequential, punitive, exemplary or other damages arising out of the Netflix Brand Assets or Your use thereof. This limitation shall apply even if Netflix was advised of, or should have been aware of, the possibility of such damages. Some jurisdictions do not allow certain exclusions or limitations; in such jurisdictions, the exclusions and limitations stated in these Terms shall apply to You to the maximum extent permitted by law. Nothing herein grants You any right, title or interest in or to the Netflix Brand Assets.</p>
                </div>
                <div className='text-white text-justify flex flex-col gap-y-5 mb-5'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Requirements</h1>
                    <p className='text-[13px] md:text-[18px]'>All of Your uses of the Netflix Brand Assets in any of Your marketing, advertising, content, or other material ("Your Materials") are subject to Netflix's approval prior to use. Approval for such uses must be submitted via a request for approval on the Netflix Partner Portal (a "Request for Approval"). Netflix's silence or failure to respond to requests does not constitute approval, and approval of one of Your Materials does not constitute approval of Your other uses, nor may such approval be transferred to any third party without Netflix's written consent. To the extent Netflix does not provide express approval, You shall not use Netflix Brand Assets. Netflix's approval of any uses of the Netflix Brand Assets shall not be construed as approval of Your Materials for compliance with applicable laws, rules or regulations, such being Your sole responsibility.<br /><br />
                        If You wish to use a Netflix Brand Asset in any way not permitted under these terms, please submit a Request for Approval. In Your request, describe how and if Your use of the Netflix Brand Assets would deviate from these Terms, and why such use should be approved by Netflix. Netflix will consider the request, but does not guarantee any particular response time or approval.<br /><br />
                        All uses of the Netflix Brand Assets must conform to the Netflix Brand Guidelines, located at https://brand.netflix.com, as well as the following requirements, unless You have prior written permission from Netflix:<br /><br />
                        No Modification. The Netflix Brand Assets must be used as provided by Netflix with no modifications. Do not remove, distort or alter any element of the Netflix Brand Assets or change any colors. Do not shorten, abbreviate, or create acronyms out of the Netflix Brand Assets.<br /><br />
                        No Generic Use. Do not use Netflix Brand Assets in a way that suggests a common, descriptive, or generic meaning.<br /><br />
                        No Plural or Possessive Use. Do not use the Netflix Brand Assets in the plural or possessive form.

                        No Incorporation. Do not incorporate Netflix Brand Assets into Your own product name, service names, trademarks, logos, company names, domain names, website titles, publication titles, or the like, unless expressly permitted by Netflix.<br /><br />

                        No confusingly similar marks. Do not use the Netflix Brand Assets, including any Netflix trademark, in a manner that might create confusion about the ownership of the Netflix Brand Assets.<br /><br />

                        No confusing source. Do not use the Netflix Brand Assets, including any Netflix trademark, in a manner that implies that Netflix is the source of Your products or service, or that otherwise might create confusion about the source of the Netflix Brand Assets.<br /><br />

                        Domain names. Do not register the Netflix Brand Assets, including any Netflix trademark, as domain names or as any part of a domain name.<br /><br />

                        Trade dress. Do not copy or imitate Netflix's website design, typefaces, distinctive color, style, graphic designs, or imagery.<br /><br />
                        Endorsement. Do not display the Netflix Brand Assets in any manner that (i) overstates Your relationship with Netflix; (ii) implies that You have a relationship or affiliation with Netflix; (iii) implies You sponsored or endorsed by Netflix; (iv) implies that any content has been authorized by Netflix; or (v) represents the views or opinions of Netflix or Netflix personnel unless You have prior written permission from Netflix to do so.<br /><br />

                        Prominence. Do not display the Netflix Brand Assets in a manner that makes it the most distinctive or prominent feature on Your web page, printed material, or other content without express written permission from Netflix to do so.<br /><br />

                        Violation of Law. Do not display the Netflix Brand Assets on any website that contains, displays, or promotes pornography or like adult content, or gambling, the sale of tobacco, alcohol, or firearms to persons under twenty-one (21) years of age.<br /><br />

                        Objectionable Use. Do not display the Netflix Brand Assets in a manner that is misleading, unfair, defamatory, infringing, libelous, disparaging, obscene, or otherwise objectionable to Netflix.<br /><br />

                        Broadcast. The Netflix Brand Assets may not be used in television, film, or video without Netflix's prior written permission. Please submit Request for Approval to use the Netflix Brand Assets in this manner.<br /><br />

                        Book or Other Publication Titles. The Netflix Brand Assets may not be displayed in titles of publications, including books, without Netflix's prior written permission. Please submit a Request for Approval to use the Netflix Brand Assets in this manner.<br /><br />

                        Merchandise. The Netflix Brand Assets may not be used or displayed in or on merchandise or manufactured items of any kind without Netflix's prior written permission. Please submit a Request for Approval to use the Netflix Brand Assets in<br /><br />
                    </p>
                </div>
                <div className='text-white text-justify flex flex-col gap-y-5 mb-5'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Netflix's Rights</h1>
                    <p className='text-[13px] md:text-[18px]'>Netflix will interpret Your compliance with these Terms in its sole discretion. Netflix may modify or terminate Your permission to display or use the Netflix Brand Assets at any time. Netflix may take action against any use of the Netflix Brand Assets that does not comply with these terms or written permission from Netflix, infringes any Netflix owned or licensed intellectual property or other right, or violates applicable law.</p>
                </div>
                <div className='text-white text-justify flex flex-col gap-y-5 mb-5'>
                    <h1 className='text-xl md:text-2xl font-semibold'>General Provisions</h1>
                    <p className='text-[13px] md:text-[18px]'>You may not assign Your rights or delegate Your obligations under these Terms without Netflix's prior written consent. These Terms do not create any rights in any third party. These Terms will be governed and construed in accordance with the laws of the State of California, without regard to conflict of law principles. The venue for any dispute or claim shall be Santa Clara County, California. Neither party shall be deemed to be an employee, agent, partner, or legal representative of the other. Netflix's waiver of breach of any provision of these Terms shall not be deemed to be a waiver of the Terms themselves. If any provision of these Terms is held by a court of competent jurisdiction to be illegal, void, or unenforceable, such provision shall be changed and interpreted so as best to accomplish the objectives of the original provision to the fullest extent allowed by law and the remaining provisions of these Terms shall remain in full force and effect.</p>
                </div>
                <div className='text-white text-justify flex flex-col gap-y-5 mb-5'>
                    <h1 className='text-xl md:text-2xl font-semibold mt-5'>Netflix Materials License Agreement</h1>
                    <p className='text-[13px] md:text-[18px]'>By downloading or otherwise receiving from Netflix the Netflix artwork, images, graphics, photographs, clips, video, audio, text, title art, or other content available on the Netflix Brand Site at http://brand.netflix.com (the "Netflix Brand Site") (collectively, the "Netflix Materials"), you ("You") agree to be bound by the following terms and conditions (the "Agreement"). You agree to comply with the Netflix Brand Asset Terms and Conditions and to the terms set forth on the Netflix Brand Site. So long as You do so, and provided You are a Netflix partner, Netflix, Inc. and its affiliates ("Netflix") hereby grants to You, a worldwide, non-exclusive, non-transferable, non-assignable, royalty-free, revocable license to use the Netflix Materials solely as approved by Netflix for the promotion of Netflix or its programming, including in Your Netflix partner promotional materials and co-branded promotional advertising.<br /><br />

                        The Netflix Materials are owned by Netflix, its affiliated companies or licensors, and are rights protectable as intellectual property or otherwise. The Netflix Materials, and all uses thereof, shall at all times be and remain the exclusive property of Netflix or its designee. You shall not use the Netflix Materials in any manner that is objectionable to Netflix, at Netflix's sole discretion. Netflix reserves the right in its sole discretion to terminate or modify Your permission to use the Netflix Materials, and take action against any use that does not conform to the terms of this Agreement, infringes any Netflix intellectual property or other right, or violates applicable law.<br /><br />

                        Except as expressly set forth herein, no rights (either by implication, estoppel, or otherwise) are granted to You. Your use of the Netflix Materials will inure to the benefit of Netflix. All Netflix Materials distributed herein are "as is," "as available" and "with all faults" without warranties of any kind, either express or implied, including, without limitation, warranties of title or implied warranties of merchantability, non-infringement of any third party right or fitness for a particular purpose or those arising by statute or otherwise in law or from a course of dealing or usage of trade.<br /><br />

                        All of Your uses of the Netflix Materials in any of Your marketing, advertising, content, or other material ("Your Materials") are subject to Netflix's approval prior to use. Approval for such uses must be submitted via a request for approval on the Netflix Brand Site (a "Request for Approval"). Netflix's silence or failure to respond to requests does not constitute approval, and approval of one of Your Materials does not constitute approval of Your other uses, nor may such approval be transferred to any third party without Netflix's written consent. To the extent Netflix does not provide express approval, You shall not use Netflix Materials. Netflix's approval of any uses of the Netflix Materials shall not be construed as approval of Your Materials for compliance with applicable laws, rules or regulations, such being Your sole responsibility.<br /><br />

                        By downloading the Netflix Materials, You represent and warrant that You have the power and authority to enter into this Agreement and to perform any obligations hereunder, and that this Agreement shall constitute valid and binding obligations of You enforceable in accordance with its terms.<br /><br />

                        You hereby agree to indemnify, hold harmless, and defend Netflix, its parent, subsidiary, and affiliated companies, and each of their respective members, officers, directors, agents, employees, successors, and assigns from and against any and all claims, demands, losses, suits, actions, judgments, costs, and expenses (including, without limitation, reasonable attorneys' fees) arising out of or in connection with Your use of the Netflix Materials and/or any breach or alleged breach by You of any of the representations, warranties, and/or agreements made by You hereunder. You hereby acknowledge and agree that Your rights and remedies in connection with this Agreement or otherwise, shall be limited to the right, if any, to seek damages at law, and You shall have no right in any event (and do hereby waive all such rights, if any) to seek to enjoin or restrain the production, marketing, advertising, distribution or exhibition of any productions of Netflix.<br /><br />

                        If any claim is brought by a third party for which a claim of indemnification is or may be provided hereunder, You shall provide prompt written notice to Netflix. In such instance, Netflix shall have the right to control the defense and/or settlement of any claim provided that the parties cooperate reasonably with each other in the defense of any claim, including making available (under seal if desired, and if allowed) all records reasonably necessary to the defense of such claim, and You shall have the right to join and participate (through Your own counsel and at Your own expense) actively in Netflix's defense of the claim.<br /><br />

                        The terms of this Agreement, and Your exercise of the rights evidenced hereby, are at all times subject to the terms of this Agreement. In the event of a conflict between the terms of this Agreement and any Netflix Partner Marketing Agreement or other Netflix Partner Agreement between You and Netflix ("Partner Agreement"), the terms of the Partner Agreement shall control, unless the parties agree in writing that they intend this Agreement or any provisions herein to supersede or modify any Partner Agreement or provisions therein.</p>
                </div>
                <h1 className='text-white md:text-justify font-bold text-2xl md:text-2xl'>Access and use of the Netflix Materials is granted conditioned on Your agreement to the terms set forth herein as if You have signed Your Agreement.</h1>
                <div className='flex justify-center text-center mt-15 mb-10'>
                    <button onClick={onClose} className='text-white border-1 border-red-500 px-13 py-2 hover:bg-red-500 hover:text-white'>RETURN TO HOME</button>
                </div>
                <div className='flex justify-center border-b-2 border-gray-600 pb-10'>
                    <Image src={logo} alt='logo' className='w-15' />
                </div>
                  <div className='flex justify-center text-center mt-15 mb-10'>
                    <button onClick={onClose} className='text-white border-1 border-red-500 px-13 py-2 hover:bg-red-500 hover:text-white'>CLOSE</button>
                </div>
                <div className='flex justify-center'>
                    <Image src={logo} alt='logo' className='w-15' />
                </div>
            </div>
        </div>
    )
}

export default Policy