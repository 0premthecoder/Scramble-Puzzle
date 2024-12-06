import React, { useState, useEffect } from "react";
import Pomodoro from "../Pomodora/Pomodora";

const StudyRevision = () => {
    const [topics, setTopics] = useState([]);
    const [filter, setFilter] = useState("Today");
    const [topicName, setTopicName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [selectedTopic, setSelectedTopic] = useState(null); // For modal
    const [showModal, setShowModal] = useState(false);
    const [showPomo, setShowPomo] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false)

    const gapDays = [1, 2, 4, 7, 12, 20, 33, 54];

    useEffect(() => {
        const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
        setTopics(storedTopics);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("topics", JSON.stringify(topics));
        }
    }, [topics, isInitialized])

    const addTopic = () => {
        if (!topicName || !startDate) {
            alert("Please enter both topic name and start date.");
            return;
        }
        console.log(startDate)
        const start = new Date(startDate);
        const revisionDates = gapDays.map((gap) => {
            const date = new Date(start);
            date.setDate(date.getDate() + gap);
            return date.toISOString().split("T")[0];
        });
        const newTopic = {
            name: topicName,
            startDate,
            revisions: revisionDates,
            completed: false,
        };

        setTopics([...topics, newTopic]);
        setTopicName("");
        setStartDate("");
    };

    const handleComplete = (index) => {
        const updatedTopics = [...topics];
        updatedTopics[index].completed = !updatedTopics[index].completed;
        setTopics(updatedTopics);
    };

    const getFilteredTopics = () => {
        const today = new Date().toISOString().split("T")[0];
        const tomorrow = new Date();
        tomorrow.setDate(new Date().getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split("T")[0];

        return topics.map((topic) => {
            const upcomingDate = topic.revisions.find(
                (date) => date >= today
            );

            let displayDate = null;
            if (filter === "Today" && topic.revisions.includes(today)) {
                displayDate = today;
            } else if (
                filter === "Tomorrow" &&
                topic.revisions.includes(tomorrowStr)
            ) {
                displayDate = tomorrowStr;
            } else if (filter === "All" && upcomingDate) {
                displayDate = upcomingDate;
            }

            return {
                ...topic,
                displayDate,
            };
        }).filter((topic) => topic.displayDate);
    };

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedTopic(null);
    };

    const openObsidian = () => {
        const obsidianUrl = "obsidian://open?vault=study"; // Replace with your vault name
        window.open(obsidianUrl, "_blank");
    };

    // Delete a topic
    const deleteTopic = (id) => {
        const updatedTopics = topics.filter((topic) => topic.id !== id);
        setTopics(updatedTopics);
    };
    
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Write Topic Name"
                    value={topicName}
                    onChange={(e) => setTopicName(e.target.value)}
                />
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <button onClick={addTopic}>Add Topic</button>
            </div>

            <div className="center">
                <h3>{filter} Due Topics</h3>
                <select
                    name="filter"
                    id="filter"
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="All">Show All</option>
                </select>
            </div>

            <button onClick={() => setShowPomo(showPomo ? false : true)}>{showPomo ? "End" : "Do"} Pomodora</button>
            {showPomo && <Pomodoro />}

            <div>
                {getFilteredTopics().map((topic, index) => (
                    <div
                        key={index}

                        style={{
                            marginBottom: "1rem",

                        }}
                        className="center"
                    >
                        <h4
                            style={{
                                color: topic.completed
                                    ? "green"
                                    : topic.displayDate ===
                                        new Date().toISOString().split("T")[0]
                                        ? "red"
                                        : "black",
                                textDecoration: topic.completed
                                    ? "line-through"
                                    : "none",
                                cursor: "pointer",
                            }}
                            onClick={() => handleTopicClick(topic)} // Click to open modal
                        >
                            {topic.name}
                        </h4>
                        <p>Next Revision: {topic.displayDate}</p>
                        <label>
                            <input
                                type="checkbox"
                                checked={topic.completed}
                                onChange={() => handleComplete(index)}
                                style={{ cursor: "pointer", }}
                            />
                            <button onClick={() => deleteTopic(topic.id)} style={deleteButtonStyle}>
                                Delete Topic
                            </button>
                        </label>
                    </div>
                ))}
            </div>

            {showModal && selectedTopic && (
                <div className="modal" style={modalStyles}>
                    <div style={modalContentStyles}>
                        <h3>{selectedTopic.name}</h3>
                        <p>
                            <strong>Start Date:</strong> {selectedTopic.startDate}
                        </p>
                        <p>
                            <strong>Next Revision:</strong>{" "}
                            {selectedTopic.displayDate}
                        </p>
                        <p>
                            <strong>Revision Schedule:</strong>{" "}
                            {selectedTopic.revisions.join(", ")}
                        </p>
                        <button onClick={closeModal} style={buttonStyles}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            <br />

            <button onClick={openObsidian}>
                Open Obsidian
            </button>
        </>
    );
};

export default StudyRevision;

const deleteButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "10px",
};
const modalStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const modalContentStyles = {
    backgroundColor: "#1a1a1a",
    padding: "20px",
    borderRadius: "8px",
    width: "80%",
    maxWidth: "400px",
};

const buttonStyles = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};
