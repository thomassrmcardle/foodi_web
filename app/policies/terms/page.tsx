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
                <h1 className="text-3xl">Terms of Service</h1>

                <h2>Agreement</h2>
                <p>Upon creating an account on the foodi platform, all users must have agreed to adhere to the following policies regarding the usage of the platform and user behaviour. If these policies are not followed, appropriate action may be taken by the relevant individuals of the Foodi Team accordingly.</p>

                <h2>User Requirements</h2>
                <p>Due to the nature of the application, we require the account of each user to be operated by a person of the age of 13 years or older, and we opperate the application under this assumption.</p>

                <h2>Publishing Media</h2>
                <p>All images published to the Foodi platform must be respectful, not containing any profanity and inappropriate content. The following is a list of prohibitted content of such media...</p>
                <ol>
                    <li>Media which may cause harm or distress to other individuals. This includes hate speech, derogatory media, and graphic content depicting gore or violence.</li>
                    <li>Any form of profanity, including nudity, swear words, or the disrespect of a faith or belief.</li>
                    <li>Politically motivated media, or any media promoting, criticising or discussing politics is not allowed.</li>
                    <li>Religious imagery should be avoided when possible. However, we do recognise this may not be applicable under specific circumstances. Images of people wearing religious clothing are allowed, but any iconography or imagery strongly corrolated to a specific faith should be avoided where possible.</li>
                </ol>
                <p>Likewise, similar standards are expected to be followed within the text content published to the platform. The following content is not allowed within any text content...</p>
                <ol>
                    <li>Hate speech is not tolerated. This includes racist, homophobic, transphobic language etc.</li>
                    <li>The discussion of any form of profanity is prohibited.</li>
                    <li>No swear words or slurs should be used.</li>
                    <li>Politics should not be discussed. This includes any message, no matter whether it is supportive, critical, or informative of the topic.</li>
                    <li>No beliefs or faiths should be promoted or criticised. The discussion of a faith in connection to a relevant topic to the site is allowed. For example, a dish may be described as "halal" in its description.</li>
                </ol>


                <h2>Policy Enforcement</h2>
                <p>If these expectations are not met, the appropriate members of the Foodi Team hold the ability to take appropriate action. However, the action taken depends on the deemed "severity" of such a violation.</p>
                <p>Violations deemed to be "minor" will most often result in the removal of a media. However, if multiple of these violations from the same user succeed one another, later violations may be treated more severly.</p>
                <p>More severe violations deemed to be "severe" will result in a larger response. This may result in the deletion of a user's account and all corresponding data.</p>

            </div>

            <p>{'Document Version: 1'}</p>
            <p style={{marginTop: 16}}>{'Last Update: [NEW_DATE]'}</p>

        </main>
        </div>
    );
}
