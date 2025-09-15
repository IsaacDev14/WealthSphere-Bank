import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faBell,
  faEnvelope,
  faMobileAlt,
  faCircleCheck,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const Settings: React.FC = () => {
  // Color scheme matching the dashboard
  const primaryColor = "#991b1b"; // Rich red (bg-red-800)
  const darkText = "#1e293b";
  const lightText = "#64748b";
  const cardBg = "#ffffff";
  const dashboardBg = "#fef2f2"; // Very light red background

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Logic to update password would go here
    console.log("Password updated successfully.");
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    alert("Password changed successfully!");
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: dashboardBg }}>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold" style={{ color: darkText }}>
          Account Settings
        </h2>
        <p className="text-sm" style={{ color: lightText }}>
          Manage your profile, security, and notification preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Settings Section */}
        <div className="p-6 rounded-xl shadow-md border border-gray-100" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUser} className="text-xl mr-3" style={{ color: primaryColor }} />
            <h3 className="text-xl font-semibold" style={{ color: darkText }}>
              Profile Information
            </h3>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: darkText }}>Full Name</label>
              <input type="text" id="name" defaultValue="James Brown" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 transition-shadow" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: darkText }}>Email Address</label>
              <input type="email" id="email" defaultValue="james.brown@example.com" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 transition-shadow" />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-sm font-medium rounded-lg text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: primaryColor }}
            >
              Update Profile
            </button>
          </form>
        </div>

        {/* Security Settings Section */}
        <div className="p-6 rounded-xl shadow-md border border-gray-100" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faLock} className="text-xl mr-3" style={{ color: primaryColor }} />
            <h3 className="text-xl font-semibold" style={{ color: darkText }}>
              Security
            </h3>
          </div>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="relative">
              <label htmlFor="currentPassword" className="block text-sm font-medium mb-1" style={{ color: darkText }}>Current Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="currentPassword"
                value={passwordForm.currentPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 transition-shadow pr-10"
                required
              />
              <span className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
              </span>
            </div>
            <div className="relative">
              <label htmlFor="newPassword" className="block text-sm font-medium mb-1" style={{ color: darkText }}>New Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 transition-shadow pr-10"
                required
              />
              <span className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
              </span>
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1" style={{ color: darkText }}>Confirm New Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                value={passwordForm.confirmPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 transition-shadow pr-10"
                required
              />
              <span className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-sm font-medium rounded-lg text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: primaryColor }}
            >
              Change Password
            </button>
          </form>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
              <span className="font-medium text-sm" style={{ color: darkText }}>Two-Factor Authentication (2FA)</span>
            </div>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="block bg-gray-600 w-12 h-6 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-6"></div>
              </div>
            </label>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="p-6 rounded-xl shadow-md border border-gray-100 md:col-span-2" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faBell} className="text-xl mr-3" style={{ color: primaryColor }} />
            <h3 className="text-xl font-semibold" style={{ color: darkText }}>
              Notification Preferences
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
                <span className="font-medium text-sm" style={{ color: darkText }}>Email Notifications</span>
              </div>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={notifications.email}
                    onChange={() => setNotifications({ ...notifications, email: !notifications.email })}
                  />
                  <div className={`block w-12 h-6 rounded-full ${notifications.email ? 'bg-red-800' : 'bg-gray-600'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform ${notifications.email ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMobileAlt} className="text-gray-500" />
                <span className="font-medium text-sm" style={{ color: darkText }}>SMS Notifications</span>
              </div>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={notifications.sms}
                    onChange={() => setNotifications({ ...notifications, sms: !notifications.sms })}
                  />
                  <div className={`block w-12 h-6 rounded-full ${notifications.sms ? 'bg-red-800' : 'bg-gray-600'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform ${notifications.sms ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBell} className="text-gray-500" />
                <span className="font-medium text-sm" style={{ color: darkText }}>Push Notifications</span>
              </div>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={notifications.push}
                    onChange={() => setNotifications({ ...notifications, push: !notifications.push })}
                  />
                  <div className={`block w-12 h-6 rounded-full ${notifications.push ? 'bg-red-800' : 'bg-gray-600'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform ${notifications.push ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;