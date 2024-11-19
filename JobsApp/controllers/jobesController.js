
// CRUDE Operations
const getAllJobs=async (req, res)=>{
    res.status(200).send("<h1>Get all Jobs</h1>")

}
const getJob=async (req,res)=>{
    res.status(200).send("<h1>Get One Jobs</h1>")
}
const createJob=async (req,res)=>{
    res.status(200).send("<h1>Create new Job</h1>")

}
const updateJob=async (req,res)=>{
    res.status(200).send("<h1>UPDATE JOB USING PATCH METHODE</h1>")

}
const deleteJob=async (req,res)=>{
    res.status(200).send("<h1>DELETE METHODE</h1>")

}

module.exports={
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}