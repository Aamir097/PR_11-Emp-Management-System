import TaskModel from "../models/task.model.js";
import axiosInstance from "../configs/axiosInstance.js";

export const addTaskPage = (req, res) => {
    return res.render('./pages/addTask.ejs');
};

export const addTask = async (req, res) => {
    try {
        await axiosInstance.post('/task', req.body);
        console.log("Task Added.");
        return res.redirect(req.get('Referrer') || "/");
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || "/");
    }
};

export const viewTask = async (req, res) => {
  try {
    const response = await axiosInstance.get('/task');
    const tasks = response.data;
    const role = req.user.role; 
    return res.render('./pages/viewTasks.ejs', { data: tasks, role });
  } catch (error) {
    console.log(error.message);
    return res.redirect('/'); 
  }
};


export const updateTaskPage = async (req, res) => {
    const taskId = req.params.id;
    try {
        const response = await axiosInstance.get(`/task/${taskId}`);
        const task = response.data;
        return res.render('./pages/updateTask.ejs', { task });
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || "/");
    }
};

export const updateTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        await axiosInstance.put(`/task/${taskId}`, req.body);
        console.log("Task Updated.");
        return res.redirect(req.get('Referrer') || "/");
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || "/");
    }
};

export const deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        await axiosInstance.delete(`/task/${taskId}`);
        console.log("Task Deleted.");
        return res.redirect(req.get('Referrer') || "/");
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || "/");
    }
};
