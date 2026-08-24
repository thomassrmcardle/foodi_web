import Image from "next/image";

import { Metadata } from 'next'; 

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: "This document details the usage of user data on the Foodi platform. This includes what is collected, how it is used, and how you can have it modified or deleted.",
};

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <div>
                <h1 className="text-3xl">Terms of Use</h1>

                <h2>Agreement</h2>
                <p>Upon creating an account on the foodi platform, all users must have agreed to adhere to the following policies regarding the usage of the platform and user behaviour. If these policies are not followed, appropriate action may be taken by the relevant individuals of the Foodi Team accordingly.</p>

                <h2>User Requirements</h2>
                <p>Due to the nature of the application, we require the account of each user to have an accurate declared date of birth to meet legal requirements in restricting certain features from specific age groups, and we opperate the application under this assumption.</p>
                <p>Users under the age of 16 are restricted from the following features...</p>
                <ol>
                    <li>Profiles of users under the age of 16 cannot be made "public". This means that details such as their name and profile picture cannot be shared with individuals. The only exception of this is any other users who are within the same "family" within the "Plus" subscription as described in this document.</li>
                    <li>The ability to post recipes publically is limited for users under the age of 16. Users below this age can save recipes privately, but cannot share these publically.</li>
                </ol>
                <p>For users under the age of 16 who wish to connect with family members, we reccomend the usage of the "Families" feature for those subscribed to the "Plus" subscription. This allows for users under the age of 16 to share recipes with family members without exposing their own details publically.</p>
                <p>For more information on how the data of users is used, please see our <a href="../policies/privacy">Privacy Policy</a>.</p>

                <h2>Account Management</h2>
                <p>We reccomend each person who uses the Foodi platform has their own personal account for the sake of the privacy of their information and for a greater experience while using the platform.</p>
                <p>In the event that details for an account are lost, we reccomend that users follow the following steps:</p>
                <ol>
                    <li>Go on to the Foodi platform and navigate to the "Log In" screen.</li>
                    <li>Tap or click on the option "Forgot Password". This is likely to be located towards the bottom of the screen.</li>
                    <li>Input the email address linked to the account you are trying to recover. If you cannot remember which address you used, you may want to try multiple addresses.</li>
                    <li>If an email address linked to an account is provided, an email will be sent to that account to change it's password. The link on that email must be opened. This will show a page where the user will be able to change the password of the account.</li>
                </ol>
                <p>Notably, we reccomend users not to share the details of their passwords with other individuals as this may provide them with access to your account. To help suser protect against such threats, the following is a list of actions the Foodi Team will never conduct.</p>
                <ol>
                    <li>Users will never be asked to share the password to an account they have created.</li>
                    <li>No member of the Foodi Team will ever request access to another user's account.</li>
                </ol>

                <h2>Publishing Media</h2>
                <p>All images published to the Foodi platform must be respectful, not containing any profanity and inappropriate content. The following is a list of prohibitted content of such media (within both text and images)...</p>
                <ol>
                    <li>Media which may cause harm or distress to other individuals. This includes hate speech, derogatory media, and graphic content depicting gore or violence.</li>
                    <li>Any form of profanity, including nudity, swear words, or the disrespect of a faith or belief.</li>
                    <li>Politically motivated media, or any media promoting, criticising or discussing politics is not allowed.</li>
                    <li>Religious imagery should be avoided when possible. However, we do recognise this may not be applicable under specific circumstances. Images of people wearing religious clothing are allowed, but any iconography or imagery strongly corrolated to a specific faith should be avoided where possible.</li>
                    <li>No media should be used for the purpose of the promotion of a third party product not produced by Foodi. Likewise, content should not encourage the sale or purchase of any products, nor should it promise any finanical benefits to users. Please note that stating the need of a household name product is exempt from this rule. For example, the statement "This recipe requires Nutella" does not violate this policy as it lists an ingredient necessary for a recipe.</li>
                </ol>
                <p>Furthermore, any content deemed illegal, or a violation of a person's privacy will be removed.</p>
                
                <h2>Copyright</h2>
                <p>The unlawful use of copyrighted material on the platform violates our policies, and the detection of such content will result in it's removal.</p>
                <p>As per our <a href="../policies/privacy">Privacy Policy</a>, by agreeing to these terms, users allow the usage of content which they upload to Foodi by the Foodi Team for marketing purposes beyond the platform itself.</p>

                <h2>Frauds and Scams</h2>
                <p>Any misleading content is prohibited on the platform. Particularly that which promises any financial benefit.</p>
                <p>Likewise, the impersonation of another individual, no matter whether they too are registered on the platform, is prohibited, and may result in the deletion of the imporsonating user's account.</p>

                <h2>Plus Subscription</h2>
                <p>The "plus" subscription is designed to provide additional features to users of the platform. This can be subscribed to for a monthly, automatically recurring fee within the platform.</p>
                <p>This subscription can be cancelled at any time from within the application under the "settings" section of the application. This will remove access to the features included in the subscription. However, data associated to these features will not be deleted at this time, only under the events or conditions listed in our <a href="../policies/privacy">Privacy Policy</a>.</p>
                <p>Upon the deletion of an account, any subscription associated to that account will be cancelled. If this does not occur and charges continue to be made, please contatct the foodi team with the following email address and explain the situation and we will attempt to resolve it in due course.</p>
                <p>{"[email]"}</p>

                <h2>Moderation</h2>
                <p>All content uploaded to the platform is moderated by the Foodi Team. Any content found to be in violation of our policies may be removed. For more information, please see the Policy Enforcement section.</p>
                <p>We request that if users find any content they believe is in violation of our policies, that they report it to the Foodi Team using in inbuilt report feature. This will create a ticket for the content to be re-reviewed by our team, in which appropriate action will be taken if deemed necessary.</p>

                <h2>Policy Enforcement</h2>
                <p>If these expectations are not met, the appropriate members of the Foodi Team hold the ability to take appropriate action. However, the action taken depends on the deemed "severity" of such a violation.</p>
                <p>Violations deemed to be "minor" will most often result in the removal of a media. However, if multiple of these violations from the same user succeed one another, later violations may be treated more severly.</p>
                <p>More severe violations deemed to be "severe" will result in a larger response. This may result in the deletion of a user's account and all corresponding data.</p>

                <p>Any content deemed to be illegal may also be reported to authorities where necessary.</p>

            </div>

            <p style={{marginTop: 16}}>{'Document Version: 1'}</p>
            <p>{'Last Update: [NEW_DATE]'}</p>

        </main>
        </div>
    );
}
