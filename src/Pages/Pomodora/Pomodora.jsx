import React, { useState, useEffect } from "react";

const Pomodoro = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // Initial timer set to 25 minutes
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false); // Track if it's a work session or break
    const [sessionCount, setSessionCount] = useState(0); // Track completed sessions

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
        setIsRunning(false);
    };

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 0) {
                        clearInterval(timer);
                        setIsBreak(!isBreak);
                        if (!isBreak) setSessionCount(sessionCount + 1);
                        return isBreak ? 25 * 60 : 5 * 60; // Switch between work (25 mins) and break (5 mins)
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isRunning, isBreak]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <div style={containerStyle}>
            <h2>Pomodoro Timer</h2>
            <h3>{isBreak ? "Break Time" : "Work Time"}</h3>
            <div style={timerStyle}>{formatTime(timeLeft)}</div>
            <div style={buttonContainerStyle}>
                <button onClick={toggleTimer} >
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button onClick={resetTimer} >
                    Reset
                </button>
            </div>
            <p>Completed Sessions: {sessionCount}</p>
        </div>
    );
};

export default Pomodoro;

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
};

const timerStyle = {
    fontSize: "48px",
    margin: "20px 0",
    fontWeight: "bold",
};

const buttonContainerStyle = {
    display: "flex",
    gap: "10px",
};

