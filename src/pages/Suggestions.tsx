import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faLightbulb, faBug, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Suggestions: React.FC = () => {
  // Color scheme matching the dashboard
  const primaryColor = "#991b1b"; // Rich red (bg-red-800)
  const darkText = "#1e293b";
  const lightText = "#64748b";
  const cardBg = "#ffffff";
  const dashboardBg = "#fef2f2"; // Very light red background

  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("general");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting feedback:", { category, feedback });
    // In a real application, you would send this data to an API endpoint here.
    
    // For this example, we'll just set a submitted state
    setSubmitted(true);
    setFeedback(""); // Clear the form
    setCategory("general");
    
    // Optionally, reset the submitted state after a few seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: dashboardBg }}>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold" style={{ color: darkText }}>
          Send Us Your Suggestions
        </h2>
        <p className="text-sm" style={{ color: lightText }}>
          We value your feedback. Tell us what you think or report an issue.
        </p>
      </div>

      <div className="p-6 rounded-xl shadow-md border border-gray-100 max-w-2xl mx-auto" style={{ backgroundColor: cardBg }}>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <FontAwesomeIcon icon={faPaperPlane} className="text-6xl mb-4" style={{ color: primaryColor }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: darkText }}>
              Thank You for Your Feedback!
            </h3>
            <p className="text-sm" style={{ color: lightText }}>
              Your suggestion has been successfully submitted. We will review it shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-2" style={{ color: darkText }}>
                Category
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCategory("general")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "general" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={category === "general" ? { borderColor: primaryColor, color: primaryColor } : {}}
                >
                  <FontAwesomeIcon icon={faCommentDots} /> General Feedback
                </button>
                <button
                  type="button"
                  onClick={() => setCategory("feature")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "feature" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={category === "feature" ? { borderColor: primaryColor, color: primaryColor } : {}}
                >
                  <FontAwesomeIcon icon={faLightbulb} /> New Feature Idea
                </button>
                <button
                  type="button"
                  onClick={() => setCategory("bug")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "bug" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={category === "bug" ? { borderColor: primaryColor, color: primaryColor } : {}}
                >
                  <FontAwesomeIcon icon={faBug} /> Report a Bug
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="feedback" className="block text-sm font-medium mb-2" style={{ color: darkText }}>
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows={6}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 resize-none transition-shadow"
                placeholder="Share your thoughts on how we can improve..."
                required
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium rounded-lg text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                Send Feedback
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Suggestions;