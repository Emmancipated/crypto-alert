'use server'
import { Novu } from '@novu/node';

const novuApiKey = process.env.NOVU_API_KEY as string
const novu = new Novu(novuApiKey);

export default async function GetNovu(username: string, email:string, userId: string) {
  return novu.subscribers.identify(userId, {
    email: email,
    firstName: username,
  });
}

export const createSubscriber = async (uid: string, email: string, displayName: string) => {
  "use server";
  return await novu.subscribers.identify(uid, {
    email: email,
    firstName: displayName,
  });
}



// export async function handler(req:any, res:any) {
//   const { username, email, password } = req.body;

//   try {
//     // Create subscriber
//     const createResponse = await fetch('https://api.novu.co/v1/subscribers', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, email, password }),
//     });

//     if (createResponse.ok) {
//       // Get subscriber ID from the create response
//       const createData = await createResponse.json();
//       const subscriberId = createData.subscriberId;

//       // Identify the subscriber using the Novu JavaScript library
//       novu.subscriber.identify(subscriberId);

//       // Handle successful response
//       res.status(200).json(createData);
//     } else {
//       // Handle error response
//       res.status(createResponse.status).json({ error: 'Failed to create subscriber' });
//     }
//   } catch (error) {
//     // Handle error
//     res.status(500).json({ error: 'Failed to create subscriber' });
//   }
// }

