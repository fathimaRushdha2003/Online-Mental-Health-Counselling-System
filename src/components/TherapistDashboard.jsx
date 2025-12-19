import React from "react";

export default function TherapistTest() {
  const therapist = {
    name: "Dr. Ayesha Rahman",
    specialization: "Clinical Psychologist",
    experience: 8,
    availability: "Mon – Fri, 9:00 AM – 5:00 PM",
    email: "ayesha.rahman@example.com",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Therapist Profile (Test)</h1>

        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">Name:</span> {therapist.name}</p>
          <p><span className="font-semibold">Specialization:</span> {therapist.specialization}</p>
          <p><span className="font-semibold">Experience:</span> {therapist.experience} years</p>
          <p><span className="font-semibold">Availability:</span> {therapist.availability}</p>
          <p><span className="font-semibold">Email:</span> {therapist.email}</p>
        </div>

        <button
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          onClick={() => alert("Test booking clicked")}
        >
          Book Session (Test)
        </button>
      </div>
    </div>
  );
}
