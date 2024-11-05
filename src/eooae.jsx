import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Clock, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

const scheduleData = {
  "Monday": [
    { "time": "5:40-6:50 AM", "activity": "Fajr Prayer and Quran Recitation" },
    { "time": "6:50-7:20 AM", "activity": "Workout" },
    // ... rest of Monday's tasks
  ],
  // ... rest of the week's data
};

const DailyTasksApp = () => {
  const [currentDay, setCurrentDay] = useState('Monday');
  const [nextDay, setNextDay] = useState('Tuesday');
  const [completedTasks, setCompletedTasks] = useState({});
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    // Set current day based on actual day of week
    const today = new Date().getDay();
    setCurrentDay(days[today]);
    setNextDay(days[(today + 1) % 7]);
  }, []);

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

  const TaskList = ({ tasks, day, showCheckbox = true }) => (
    <div className="space-y-3">
      {tasks.map(({ time, activity }) => (
        <div key={`${time}-${activity}`} 
             className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-50">
          {showCheckbox && (
            <Checkbox
              checked={isTaskCompleted(day, time, activity)}
              onCheckedChange={() => handleTaskCompletion(time, activity)}
            />
          )}
          <div className="flex items-center space-x-2 text-gray-500">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">{time}</span>
          </div>
          <span className={`flex-1 ${isTaskCompleted(day, time, activity) ? 'line-through text-gray-400' : ''}`}>
            {activity}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Tabs defaultValue="today" className="space-y-6">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
            <TabsTrigger value="week">Week View</TabsTrigger>
          </TabsList>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700">{currentDay}</span>
          </div>
        </div>

        <TabsContent value="today" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Today's Tasks</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TaskList tasks={scheduleData[currentDay] || []} day={currentDay} />
            </CardContent>
          </Card>

          {getIncompleteTasksForDay(currentDay).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <span>Pending Tasks</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={getIncompleteTasksForDay(currentDay)} 
                  day={currentDay} 
                />
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="tomorrow">
          <Card>
            <CardHeader>
              <CardTitle>Tomorrow's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <TaskList 
                tasks={scheduleData[nextDay] || []} 
                day={nextDay}
                showCheckbox={false} 
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="space-y-6">
          {days.map(day => (
            <Card key={day}>
              <CardHeader>
                <CardTitle>{day}</CardTitle>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={scheduleData[day] || []} 
                  day={day}
                  showCheckbox={day === currentDay} 
                />
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DailyTasksApp;