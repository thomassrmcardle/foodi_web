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
                    <li>Profiles of users under the age of 16 cannot be made "public". This means that details such as their name and profile picture cannot be shared with individuals. The only exception of this is any other users who are within the same "family" within the "Plus" subscription as described in this documnent.</li>
                    <li>The ability to post recipes publically is limited for users under the age of 16. Users below this age can save recipes privately, but cannot share these publically.</li>
                </ol>

                <h2>Publishing Media</h2>
                <p>All images published to the Foodi platform must be respectful, not containing any profanity and inappropriate content. The following is a list of prohibitted content of such media...</p>
                <ol>
                    <li>Media which may cause harm or distress to other individuals. This includes hate speech, derogatory media, and graphic content depicting gore or violence.</li>
                    <li>Any form of profanity, including nudity, swear words, or the disrespect of a faith or belief.</li>
                    <li>Politically motivated media, or any media promoting, criticising or discussing politics is not allowed.</li>
                    <li>Religious imagery should be avoided when possible. However, we do recognise this may not be applicable under specific circumstances. Images of people wearing religious clothing are allowed, but any iconography or imagery strongly corrolated to a specific faith should be avoided where possible.</li>
                </ol>
                <p>Likewise, similar standards are expected to be followed within the text content published to the platform. This includes all text fields within the content of recipes, and the content of other platform features such as user profiles and planning features such as meal planning. The following content is not allowed within any text content...</p>
                <ol>
                    <li>Hate speech is not tolerated. This includes racist, homophobic, transphobic language etc.</li>
                    <li>The discussion of any form of profanity is prohibited.</li>
                    <li>No swear words or slurs should be used.</li>
                    <li>Politics should not be discussed. This includes any message, no matter whether it is supportive, critical, or informative of the topic.</li>
                    <li>No beliefs or faiths should be promoted or criticised. The discussion of a faith in connection to a relevant topic to the site is allowed. For example, a dish may be described as "halal" in its description.</li>
                </ol>
                <p>Furthermore, any content deemed illegal, or a violation of a person's privacy will be removed.</p>

                <h2>Frauds and Scams</h2>
                <p>Any misleading content is prohibited on the platform. Particularly that which promises any financial benefit.</p>
                <p>Likewise, the impersonation of another individual, no matter whether they too are registered on the platform, is prohibited, and may result in the deletion of the imporsonating user's account.</p>

                <h2>Plus Subscription</h2>
                <p>The "plus" subscription is designed to provide additional features to users of the platform. This can be subscribed to for a monthly, automatically recurring fee within the platform.</p>
                <p>This subscription can be cancelled at any time from within the application under the "settings" section of the application. This will remove access to the features included in the subscription. However, data associated to these features will not be deleted at this time, only under the events or conditions listed in our <a href="../privacy">Privacy Policy</a>.</p>
                <p>Upon the deletion of an account, any subscription associated to that account will be cancelled. If this does not occur and charges continue to be made, please contatct the foodi team with the following email address and explain the situation and we will attempt to resolve it in due course.</p>
                <p>{"[email]"}</p>

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
