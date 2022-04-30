import { NextApiRequest, NextApiResponse } from "next";

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, message: "Only POST requests allowed" });
    return;
  }

  try {
    const { email } = req.body;

    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: "subscribed",
    });
    res.status(200).json({ ok: true });
    return;
  } catch (e) {
    console.info(e);
    res.status(500).json({ ok: false });
    return;
  }
}
