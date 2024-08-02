import { Feature } from "./Feature";
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <section className="py-[72px] pt-10 sm:py-24 bg-black text-white">
      <div className="container">
        <h2 className="section-header py-4">Everything you need</h2>
        <div className="max-w-xl mx-auto">
          <p className="section-description mt-5">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply and
            quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row sm:flex-1 gap-4">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />))}
        </div>
      </div>
    </section>
  );
};
