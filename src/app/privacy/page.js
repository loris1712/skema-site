// pages/index.js

import "@fontsource/epilogue"; 

export default function Home() {
  return (
    <div className="font-['Epilogue'] p-8 max-w-3xl mx-auto text-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        We value your privacy. This application collects minimal personal information necessary to provide its core features.
      </p>

      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect your email address and uploaded files strictly for processing your requests. We do not share or sell your data.
      </p>

      <h2 className="text-xl font-semibold mb-2">How We Use Your Data</h2>
      <p className="mb-4">
        Uploaded files are used only to generate mind maps or summaries. Your files and data are stored securely and are not accessible to unauthorized parties.
      </p>

      <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services (e.g., Supabase, AI APIs) for storage and processing. These services follow their own privacy and security standards.
      </p>

      <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
      <p className="mb-4">
        You can request the deletion of your data at any time by contacting us.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:skeema.app@gmail.com"><strong>skeema.app@gmail.com</strong></a>
      </p>
    </div>
  );
}
