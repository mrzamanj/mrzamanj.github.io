import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Effective Remote Team Leadership Strategies",
      commentor: "Zaman Joarddar",
      date: "10 March 2025",
      tag: `Project Management, Agile, Leadership`,
      description1:
        "Leading remote teams efficiently requires clear communication, strategic delegation, and leveraging the right tools.",
      description2:
        "This blog explores best practices for managing distributed teams, improving collaboration, and ensuring high productivity.",
      description3:
        "Adopting Agile methodologies and utilizing platforms like Jira, Slack, and ClickUp can streamline workflows.",
      description4:
        "A well-structured remote team with transparent reporting and regular check-ins leads to increased efficiency and team satisfaction.",
    },
    {
      id: 2,
      img: img2,
      title: "Optimizing DevOps Workflows with CI/CD",
      commentor: "Zaman Joarddar",
      date: "5 February 2025",
      tag: `DevOps, CI/CD, Automation`,
      description1:
        "Continuous Integration and Continuous Deployment (CI/CD) pipelines enhance software development by automating testing and deployments.",
      description2:
        "Using tools like Jenkins, GitHub Actions, and Docker, teams can achieve rapid and reliable code delivery.",
      description3:
        "This blog discusses best practices in setting up efficient CI/CD workflows and reducing deployment failures.",
      description4:
        "Monitoring and logging solutions such as ELK Stack ensure system reliability and performance insights.",
    },
    {
      id: 3,
      img: img3,
      title: "Scaling Applications with Microservices Architecture",
      commentor: "Zaman Joarddar",
      date: "20 January 2025",
      tag: `Microservices, System Architecture, Scalability`,
      description1:
        "Microservices architecture enables applications to be more scalable and maintainable by breaking them into independent services.",
      description2:
        "This blog explores the transition from monolithic to microservices, along with best practices and challenges.",
      description3:
        "Using Kubernetes, Docker, and API Gateways, companies can build resilient cloud-native applications.",
      description4:
        "Microservices foster continuous deployment and allow teams to work on independent components without affecting the entire system.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
