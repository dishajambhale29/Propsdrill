
import Card from "./components/Card";


function App() {
 
const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India",
  },

  {
    id: 2,
    brandLogo: "https://static.vecteezy.com/system/resources/previews/018/911/617/non_2x/microsoft-logo-editorial-free-vector.jpg",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Bengaluru, India",
  },

  {
    id: 3,
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Hyderabad, India",
  },

  {
    id: 4,
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/017/221/833/small_2x/apple-logo-free-png.png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Mumbai, India",
  },

  {
    id: 5,
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "1 month ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Bengaluru, India",
  },

  {
    id: 6,
    brandLogo: "https://vectorseek.com/wp-content/uploads/2021/01/Nvidia-Logo-Vector-scaled.jpg",
    companyName: "NVIDIA",
    datePosted: "6 weeks ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Pune, India",
  },

  {
    id: 7,
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.rYdjGYfDQhkiapAzYuIvOgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Netflix",
    datePosted: "7 weeks ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$58/hour",
    location: "Mumbai, India",
  },

  {
    id: 8,
    brandLogo: "https://logos-world.net/wp-content/uploads/2023/07/Adobe-Logo-New.png",
    companyName: "Adobe",
    datePosted: "8 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$44/hour",
    location: "Noida, India",
  },

  {
    id: 9,
    brandLogo: "https://download.logo.wine/logo/IBM/IBM-Logo.wine.png",
    companyName: "IBM",
    datePosted: "9 weeks ago",
    post: "Cloud Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Chennai, India",
  },

  {
    id: 10,
    brandLogo: "https://i.pinimg.com/originals/dd/fd/12/ddfd129a047238762e5bfbaac9b8e81c.jpg",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hour",
    location: "Pune, India",
  },
  {
    id: 11,
    brandLogo: "https://download.logo.wine/logo/IBM/IBM-Logo.wine.png",
    companyName: "IBM",
    datePosted: "9 weeks ago",
    post: "Cloud Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Chennai, India",
  },
  {
    id: 12,
    brandLogo: "https://i.pinimg.com/originals/dd/fd/12/ddfd129a047238762e5bfbaac9b8e81c.jpg",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hour",
    location: "Pune, India",
  },
];



  return (
  <div className="parent">
    {jobOpenings.map(function(e){
      return <Card company={e.companyName} post={e.post} datePosted={e.datePosted} tag1={e.tag1} tag2={e.tag2} brandLogo={e.brandLogo} pay={e.pay}/>
    })}


  
  </div>

  )
}

export default App
