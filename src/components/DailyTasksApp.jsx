import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const DailyTasksApp = () => {
  const scheduleData = {
    "Monday": [
      { "time": "5:40-6:50 AM", "activity": "Fajr Prayer and Quran Recitation" },
      { "time": "6:50-7:20 AM", "activity": "Workout" },
      { "time": "7:20-7:50 AM", "activity": "Bath & Freshening Up" },
      { "time": "9:20-10:00 AM", "activity": "Travel to University" },
      { "time": "10:00-1:00 PM", "activity": "University Classes" },
      { "time": "1:00-1:40 PM", "activity": "Travel back home" },
      { "time": "1:40-2:00 PM", "activity": "Lunch" },
      { "time": "2:00-4:00 PM", "activity": "AI Project & Python Practice" },
      { "time": "4:00-4:15 PM", "activity": "Asr Prayer" },
      { "time": "4:15-5:00 PM", "activity": "Study or Self-Improvement (Node.js Course)" },
      { "time": "5:20-5:30 PM", "activity": "Maghrib Prayer" },
      { "time": "5:30-7:00 PM", "activity": "Relax or Family Time" },
      { "time": "7:00-7:15 PM", "activity": "Isha Prayer" },
      { "time": "7:15-8:15 PM", "activity": "Requirement Engineering Project" },
      { "time": "8:30-10:30 PM", "activity": "Visit Uncle" },
      { "time": "10:30-11:00 PM", "activity": "Wrap Up and Relax" }
    ],
    "Tuesday": [
      { "time": "5:40-6:50 AM", "activity": "Fajr Prayer and Quran Recitation" },
      { "time": "6:50-7:20 AM", "activity": "Workout" },
      { "time": "7:20-7:50 AM", "activity": "Bath & Freshening Up" },
      { "time": "9:20-10:00 AM", "activity": "Travel to University" },
      { "time": "10:30-5:30 PM", "activity": "University Classes" },
      { "time": "5:30-6:10 PM", "activity": "Travel back home" },
      { "time": "6:15-6:45 PM", "activity": "Dinner" },
      { "time": "7:00-7:15 PM", "activity": "Isha Prayer" },
      { "time": "7:15-8:15 PM", "activity": "AI Project Practice (Whisper & Flask)" },
      { "time": "8:30-10:30 PM", "activity": "Visit Uncle" },
      { "time": "10:30-11:00 PM", "activity": "Wrap Up and Relax" }
    ],
    "Wednesday": [
      { "time": "5:40-6:50 AM", "activity": "Fajr Prayer and Quran Recitation" },
      { "time": "6:50-7:20 AM", "activity": "Workout" },
      { "time": "7:20-7:50 AM", "activity": "Bath & Freshening Up" },
      { "time": "9:20-10:00 AM", "activity": "Travel to University" },
      { "time": "10:00-2:30 PM", "activity": "University Classes" },
      { "time": "2:30-3:10 PM", "activity": "Travel back home" },
      { "time": "3:15-4:00 PM", "activity": "Lunch" },
      { "time": "4:00-4:15 PM", "activity": "Asr Prayer" },
      { "time": "4:15-5:00 PM", "activity": "Study Information Security or Python Practice" },
      { "time": "5:20-5:30 PM", "activity": "Maghrib Prayer" },
      { "time": "5:30-7:00 PM", "activity": "Relax or Family Time" },
      { "time": "7:00-7:15 PM", "activity": "Isha Prayer" },
      { "time": "7:15-8:15 PM", "activity": "Node.js Course & Logic Building" },
      { "time": "8:30-10:30 PM", "activity": "Visit Uncle" },
      { "time": "10:30-11:00 PM", "activity": "Wrap Up and Relax" }
    ],
    "Thursday": [
      { "time": "5:40-6:50 AM", "activity": "Fajr Prayer and Quran Recitation" },
      { "time": "6:50-7:20 AM", "activity": "Workout" },
      { "time": "7:20-7:50 AM", "activity": "Bath & Freshening Up" },
      { "time": "8:00-8:30 AM", "activity": "Travel to University" },
      { "time": "8:30-5:00 PM", "activity": "University Classes" },
      { "time": "5:00-5:40 PM", "activity": "Travel back home" },
      { "time": "5:40-6:15 PM", "activity": "Dinner" },
      { "time": "7:00-7:15 PM", "activity": "Isha Prayer" },
      { "time": "7:15-8:15 PM", "activity": "Research FYP Ideas" },
      { "time": "8:30-10:30 PM", "activity": "Visit Uncle" },
      { "time": "10:30-11:00 PM", "activity": "Wrap Up and Relax" }
    ],
    "Friday": [
      { "time": "5:40-6:50 AM", "activity": "Fajr Prayer and Quran Recitation" },
      { "time": "6:50-7:20 AM", "activity": "Workout" },
      { "time": "7:20-7:50 AM", "activity": "Bath & Freshening Up" },
      { "time": "9:20-10:00 AM", "activity": "Travel to University" },
      { "time": "10:00-3:30 PM", "activity": "University Classes" },
      { "time": "3:30-4:10 PM", "activity": "Travel back home" },
      { "time": "4:15-5:00 PM", "activity": "Lunch and Relax" },
      { "time": "5:20-5:30 PM", "activity": "Maghrib Prayer" },
      { "time": "7:00-7:15 PM", "activity": "Isha Prayer" },
      { "time": "7:15-8:15 PM", "activity": "Portfolio Work (GitHub, etc.)" },
      { "time": "8:30-10:30 PM", "activity": "Visit Uncle" },
      { "time": "10:30-11:00 PM", "activity": "Wrap Up and Relax" }
    ],
    "Saturday": [
      { "time": "5:40-6:50 AM", "activity": "Fajr Prayer and Quran Recitation" },
      { "time": "6:50-7:20 AM", "activity": "Workout" },
      { "time": "7:20-7:50 AM", "activity": "Bath & Freshening Up" },
      { "time": "10:00-12:00 PM", "activity": "Research for FYP and Requirements" },
      { "time": "12:00-1:00 PM", "activity": "Lunch" },
      { "time": "1:00-4:00 PM", "activity": "Information Security or Scraping Practice" },
      { "time": "4:00-4:15 PM", "activity": "Asr Prayer" },
      { "time": "4:15-5:20 PM", "activity": "Relax or Family Time" },
      { "time": "5:20-5:30 PM", "activity": "Maghrib Prayer" },
      { "time": "7:00-7:15 PM", "activity": "Isha Prayer" },
      { "time": "7:15-8:15 PM", "activity": "Portfolio and Content Creation" },
      { "time": "8:30-10:30 PM", "activity": "Visit Uncle" }
    ],
    "Sunday": [
      { "time": "5:40-6:50 AM", "activity": "Fajr Prayer and Quran Recitation" },
      { "time": "6:50-7:20 AM", "activity": "Workout" },
      { "time": "7:20-7:50 AM", "activity": "Bath & Freshening Up" },
      { "time": "10:00-12:00 PM", "activity": "Learning & Exploration (New Tech)" },
      { "time": "12:00-1:00 PM", "activity": "Lunch" },
      { "time": "1:00-4:00 PM", "activity": "AI Project and Python Practice" },
      { "time": "4:00-4:15 PM", "activity": "Asr Prayer" },
      { "time": "4:15-5:20 PM", "activity": "Relax or Family Time" },
      { "time": "5:20-5:30 PM", "activity": "Maghrib Prayer" },
      { "time": "7:00-7:15 PM", "activity": "Isha Prayer" },
      { "time": "7:15-8:15 PM", "activity": "Self-Improvement Reading or Videos" },
      { "time": "8:30-10:30 PM", "activity": "Visit Uncle" }
    ]
  };
  
  const [currentDay, setCurrentDay] = useState('Monday');
  const [nextDay, setNextDay] = useState('Tuesday');
  const [completedTasks, setCompletedTasks] = useState({});
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    // Set current day based on actual day of week
    const today = new Date().getDay();
    setCurrentDay(days[today]);
    setNextDay(days[(today + 1) % 7]);
  }, [days]);

  const handleTaskCompletion = (time, activity) => {
    const taskKey = `${currentDay}-${time}-${activity}`;
    setCompletedTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
  };

  const isTaskCompleted = (day, time, activity) => {
    return completedTasks[`${day}-${time}-${activity}`] || false;
  };

  const getIncompleteTasksForDay = (day) => {
    return scheduleData[day]?.filter(task => 
      !isTaskCompleted(day, task.time, task.activity)
    ) || [];
  };

  const TaskListItem = ({ time, activity, completed, onTaskCompletion }) => (
    <div className="flex items-center justify-between px-4 py-2 text-sm sm:text-[16px] bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center space-x-3">
        <Clock className="h-5 w-5 text-gray-500" />
        <span className="text-gray-700 font-medium text-sm">{time}</span>
        <span className={`text-gray-800 font-bold ${completed ? 'line-through text-gray-400' : ''}`}>
          {activity}
        </span>
      </div>
      <button
        className={`p-2 rounded-md ${
          completed
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
        }`}
        onClick={() => onTaskCompletion(time, activity)}
      >
        {completed ? <CheckCircle2 className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
      </button>
    </div>
  );

  const TaskList = ({ tasks, day }) => (
    <div className="space-y-3">
      {tasks.map(({ time, activity }) => (
        <TaskListItem
          key={`${time}-${activity}`}
          time={time}
          activity={activity}
          completed={isTaskCompleted(day, time, activity)}
          onTaskCompletion={handleTaskCompletion}
        />
      ))}
    </div>
  );

  const PendingTasksList = ({ tasks, day }) => (
    <div className="space-y-3">
      {tasks.map(({ time, activity }) => (
        <TaskListItem
          key={`${time}-${activity}`}
          time={time}
          activity={activity}
          completed={false}
          onTaskCompletion={handleTaskCompletion}
        />
      ))}
    </div>
  );

  const TodayView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-700 font-medium">
          <Calendar className="h-5 w-5" />
          <span>{currentDay}</span>
        </div>
        <div className="space-x-2">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              currentDay === currentDay
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-500'
            }`}
          >
            Today
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              currentDay === nextDay
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-500'
            }`}
          >
            Tomorrow
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              currentDay === 'Week'
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-500'
            }`}
          >
            Week
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 mb-2 text-gray-700">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>Today's Tasks</span>
          </div>
          <TaskList tasks={scheduleData[currentDay] || []} day={currentDay} />
        </div>
        {getIncompleteTasksForDay(currentDay).length > 0 && (
          <div>
            <div className="flex items-center space-x-2 mb-2 text-gray-700">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <span>Pending Tasks</span>
            </div>
            <PendingTasksList tasks={getIncompleteTasksForDay(currentDay)} day={currentDay} />
          </div>
        )}
      </div>
    </div>
  );

  const TomorrowView = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-gray-700 font-medium">
        <Calendar className="h-5 w-5" />
        <span>{nextDay}</span>
      </div>
      <TaskList tasks={scheduleData[nextDay] || []} day={nextDay} />
    </div>
  );

  const WeekView = () => (
    <div className="space-y-6">
      {days.map(day => (
        <div key={day} className="space-y-6">
          <div className="flex items-center space-x-2 text-gray-700 font-medium">
            <Calendar className="h-5 w-5" />
            <span>{day}</span>
          </div>
          <TaskList tasks={scheduleData[day] || []} day={day} />
        </div>
      ))}
    </div>
  );

  const [activeTab, setActiveTab] = useState('today');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === 'today'
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-500'
            }`}
            onClick={() => setActiveTab('today')}
          >
            Today
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === 'tomorrow'
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-500'
            }`}
            onClick={() => setActiveTab('tomorrow')}
          >
            Tomorrow
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === 'week'
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-500'
            }`}
            onClick={() => setActiveTab('week')}
          >
            Week
          </button>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 font-medium">
          <Calendar className="h-5 w-5" />
          <span>{currentDay}</span>
        </div>
      </div>
      {activeTab === 'today' && <TodayView />}
      {activeTab === 'tomorrow' && <TomorrowView />}
      {activeTab === 'week' && <WeekView />}
    </div>
  );
};

export default DailyTasksApp;