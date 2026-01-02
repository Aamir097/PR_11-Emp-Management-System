import UserModel from "../models/user.model.js";
import axiosInstance from "../configs/axiosInstance.js";

export const dashboard = (req,res) => {
    return res.render('index.ejs');
}

export const addManagerPage = (req,res) => {
    return res.render('./pages/addManager.ejs');
}

export const addManager = async(req,res) => {
    try {
        // await res.fetch('http://localhost:8081/api/userapi',{
        //     method : "POST",
        //     headers : {
        //         'Content-Type' : 'application/json'
        //     },
        //     body : JSON.stringify(req.body)
        // })
        await axiosInstance.post('/userapi',req.body)
        console.log("User Created.");
        return res.redirect(req.get('Referrer') || "/");
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || "/");
    }
}

export const deleteManager = async(req,res) => {
    try {
        const { id } = req.params;
        // await res.fetch(`http://localhost:8081/api/userapi/${id}`,{
        //     method : "DELETE",
        // })
        await axiosInstance.delete(`/userapi/${id}`);
        console.log("User Deleted.");
        return res.redirect(req.get('Referrer') || "/");
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || "/");
    }
}

export const updateManager = async(req,res) => {
    try {
        const { id } = req.params;
        // await res.fetch(`http://localhost:8081/api/userapi/${id}`,{
        //     method : "PATCH",
        //     headers : {
        //         'Content-Type' : 'application/json'
        //     },
        //     body : JSON.stringify(req.body)
        // })
        // console.log("User Updated.");
        await axiosInstance.patch(`/userapi/${id}`,req.body);
        return res.redirect(req.get('Referrer') || "/");
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || "/");
    }
}

export const viewManager = async(req,res) => {
    try {
        // let response = await fetch('http://localhost:8081/api/userapi',{
        //     method : "GET",
        // })
        // let data = await response.json();
        let response = await axiosInstance.get('/userapi');
        return res.render('./pages/viewManager.ejs',{
            data : response.data
        });
    } catch (error) {
        console.log(error.message);
        return res.render('./pages/viewManager.ejs',{
            data :[]
        });
    }
}

export const loginPage = (req,res) => {
    return res.render('./pages/login.ejs');
}

export const login = async(req,res) => {
    try {
        let response = await axiosInstance.post('/userapi/login',req.body);
        let data = response.data;
        res.cookie('token',data.token);
        console.log("Login Success.");
        return res.redirect('/');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/login');
    }
}