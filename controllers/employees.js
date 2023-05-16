const e = require('express');
const {prisma} = require('../prisma/prisma-client');

const all = async (req, res) => {
    try{
        const employees = await prisma.employee.findMany();

        res.status(200).json(employees);
    } catch {
        res.status(500).json({message:'Failed to get employees'});
    }
}
const add = async (req, res) => {
    try{
        const data = req.body;
        if(!data.firstName || !data.lastName || !data.age || !data.address){
            res.status(400).json({message:'fill in all the fields'});
        }
        const employee = await prisma.employee.create({
            data:{
                ...data,
                userId: req.user.id
            }
        });
        
        return res.status(201).json(employee);
    } catch {
        res.status(500).json({message:'Failed to add employees'});
    }
}
const remove = async (req, res) => {
    try{
        const {id} = req.body;
        await prisma.employee.delete({
            where:{
                id
            }
        })
        res.status(204).json('OK');
    } catch {
        res.status(500).json({message:'Failed to remove employees'});
    }
}
const edit = async (req, res) => {
    try{
        const data = req.body;
        const id = data.id;
        await prisma.employee.update({
            where: {
                id
            },
            data
        })
        res.status(204).json('OK');
    } catch {
        res.status(500).json({message:'Failed to edit employees'});
    }
}
const employee = async (req, res) => {
    try{
        const {id} = req.params;
        const employee = await prisma.employee.findUnique({
            where:{
                id
            }
        });
        res.status(200).json(employee);
    } catch {
        res.status(500).json({message:'Failed to get employee'});
    }
}


module.exports = {
    all,
    add,
    remove,
    edit,
    employee
}