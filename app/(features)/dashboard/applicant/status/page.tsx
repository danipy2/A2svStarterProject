// import React from "react";

// const ApplicantStatusPage = () => {
//   const stages = [
//     {
//       id: 1,
//       title: "Application Submitted",
//       date: "October 26, 2023",
//       description:
//         "Your application has been successfully submitted. We're excited to learn more about you!",
//       status: "completed",
//     },
//     {
//       id: 2,
//       title: "Under Review",
//       date: "Current Stage",
//       description:
//         "Our team is currently reviewing your application. This may take a few days. Thank you for your patience.",
//       status: "current",
//     },
//     {
//       id: 3,
//       title: "Interview Stage",
//       date: "",
//       description: "",
//       status: "upcoming",
//     },
//     {
//       id: 4,
//       title: "Decision Made",
//       date: "",
//       description: "",
//       status: "upcoming",
//     },
//   ];
//   return (
//     <>
//       <main className="md:w-4xl mx-auto mt-5 p-4">
//         <div>
//           <h1 className="font-bold text-2xl">Your Application Progress</h1>
//           <p className="text-gray-600 text-sm">
//             you're on your way! Here's a summary of your application status
//           </p>
//         </div>
//         <div>
//           <div className="md:grid md:grid-cols-6 gap-6">
//             <div className="col-span-4 bg-white rounded-lg p-4">
//               <h1 className="text-lg font-bold text-gray-800 mb-8">
//                 Application Timeline
//               </h1>

//               <div className="relative">
//                 {/* Vertical line */}
//                 <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200"></div>

//                 {stages.map((stage, index) => (
//                   <div key={stage.id} className="relative pl-12 pb-8 last:pb-0">
//                     {/* Circle indicator */}
//                     <div
//                       className={`absolute left-0 top-0 h-4 w-4 rounded-full border-4 
//               ${
//                 stage.status === "completed"
//                   ? "border-green-500 bg-green-500"
//                   : stage.status === "current"
//                   ? "border-blue-500 bg-white"
//                   : "border-gray-300 bg-white"
//               }`}
//                     ></div>

//                     {/* Content */}
//                     <div
//                       className={`p-4 rounded-lg ${
//                         stage.status === "current"
//                           ? "bg-blue-50 border border-blue-100"
//                           : ""
//                       }`}
//                     >
//                       <div className="flex justify-between items-start">
//                         <h3
//                           className={`text-lg font-semibold ${
//                             stage.status === "current"
//                               ? "text-blue-700"
//                               : "text-gray-800"
//                           }`}
//                         >
//                           {stage.title}
//                         </h3>
//                         {stage.date && (
//                           <span
//                             className={`text-sm ${
//                               stage.status === "current"
//                                 ? "text-blue-600"
//                                 : "text-gray-500"
//                             }`}
//                           >
//                             {stage.date}
//                           </span>
//                         )}
//                       </div>

//                       {stage.description && (
//                         <p
//                           className={`mt-2 ${
//                             stage.status === "current"
//                               ? "text-blue-800"
//                               : "text-gray-600"
//                           }`}
//                         >
//                           {stage.description}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <section></section>
//               <section></section>
//               <section></section>
//             </div>
//           </div>
//           <div>
//             <section>
//               <h3>Recent Activitiy</h3>
//             </section>
//             <section>
//               <h3>Important Updates</h3>
//               <p>
//                 There are no new updates at this time.we will notify you by
//                 email when your application status changes.
//               </p>
//             </section>
//             <section>
//               <h3>Get Ready for the Interview!</h3>
//               <p>
//                 When you wait, it's a great time to prepare Practice your
//                 problem-solving skills as platforms like LeetCode and Codeforces
//               </p>
//               <div>Read our interview prep guide</div>
//             </section>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default ApplicantStatusPage;
