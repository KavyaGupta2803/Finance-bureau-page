import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { createStudentRows, students, handleDisburse, handleScholarshipChange, showAlert } from '../utils';

const Dashboard = () => {
  useEffect(() => {
    createStudentRows();
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 pt-8 pb-[5rem]">
        <h2 className="text-2xl font-bold mb-4">Verified Students</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Details</th>
                <th className="p-3 text-left">Bank Details</th>
                <th className="p-3 text-left">Scholarship %</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody id="studentTableBody">
              {/* Student rows will be dynamically inserted */}
            </tbody>
          </table>
        </div>
      </main>
      <div id="alertContainer" className="fixed bottom-4 left-4 z-50 hidden"></div>
      <Footer />
    </>
  );
};

export default Dashboard;
