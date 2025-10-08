import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const TeamMember = () => {
    const { memberId } = useParams();

    // Mock team data - in real app, this would come from API
    const teamMembers = {
        1: {
            avatar: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-1/545336506_1974857173315869_3701409898942313834_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEIZK3eFS4taX8OLQL2vnJPNBOH7TCvjBk0E4ftMK-MGXD2eb-dWPXIRtPfbIc4NCHwQAmqO7ih1FODTNQKbt9a&_nc_ohc=grKJTXmthZ4Q7kNvwE6rIt_&_nc_oc=AdkI-jcguWz3pbhOkU-IZE93ajf9HOp49tDElNU6QRAuFRPWjVq5QeUVFQTIYj9SJGM&_nc_zt=24&_nc_ht=scontent-mnl3-3.xx&_nc_gid=sJ2Pn9ex4OtKkZS47B6nyA&oh=00_Afe0w12KlsBzuU3bpe5vwSQgLUNkPMA3myCA1R4mMeUdTg&oe=68EBA016",
            name: "Kyo Abaquita",
            role: "Frontend Developer",
            email: "abaquita@gmail.com",
            bio: "Abaquita is a passionate frontend developer with 3 years of experience in React and modern web technologies.",
            skills: ["React", "JavaScript", "CSS", "HTML5"],
            projects: ["PNC Portal", "Student Management System"]
        },
        2: {
            avatar: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-1/460919549_2516157901910893_5188544899726350603_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeH4HGslnh4NPCtharNCxTSNqylCPJNIJCirKUI8k0gkKF78VdOOv7OvXHqlRH5JnrisrpgFQGr5RSpgvcTkU_Hu&_nc_ohc=fftjn4U-uccQ7kNvwEfX5sO&_nc_oc=AdmSJ81_8B4bwyHUcapo4svfHdKJBbfa8w6v4K65waqgPfrnoJLjssxPqt3sjN_4kbg&_nc_zt=24&_nc_ht=scontent-mnl3-3.xx&_nc_gid=4bhEndj22kZ7gX-7JhYNYw&oh=00_AffmaBzjpGjEkCmbe4foPJJaJe4naX8iuipu217IIDnJGw&oe=68EBA8F3",
            name: "Dominic Albino Acla",
            role: "Backend Developer", 
            email: "acla@gmail.com",
            bio: "Acla specializes in backend development and database design with expertise in Node.js and Python.",
            skills: ["React", "JavaScript", "CSS", "HTML5"],
            projects: ["PNC API", "Database Optimization"]
        },
        3: {
            avatar: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-1/459998305_27656721830593449_2957097090512338927_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFGwaC5aO5vPaM4vvOyFoadq2__Djz6Lcqrb_8OPPotyodYxRDtlZXggjOZrgX2WbXuRe_tZvtg8nTg66lXYR9i&_nc_ohc=Peg5dKY0-OoQ7kNvwFbpLVY&_nc_oc=AdkfgDGJP_FPuAg6odJW0gDx7kSykX03iZgyfi2FuOMNuH__G_vND-576BNUWP5-Zrk&_nc_zt=24&_nc_ht=scontent-mnl1-2.xx&_nc_gid=6y_zT_eYV4P9WhqUMfSivA&oh=00_Afe5NO5vFt9yg0d5Xti8zXtUh9xiGtS2Ms_uFeCbEkZEdA&oe=68EB955F",
            name: "Patrick Aidalla",
            role: "Backend Developer", 
            email: "aidalla@gmail.com",
            bio: "Aidalla specializes in backend development and database design with expertise in Node.js and Python.",
            skills: ["React", "JavaScript", "CSS", "HTML5"],
            projects: ["PNC API", "Database Optimization"]
        },
        4: {
            avatar: "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-1/416641537_7057828417605797_7541243782972838236_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeENC8nDkWGT64qbkXl4C95-_fyJoXo1oA_9_ImhejWgDyizgLUbd3Hej8DUBhJTxFEnOIeL4kLHfHKm6w7sqY33&_nc_ohc=iTTueisVhnAQ7kNvwEixp8N&_nc_oc=AdlS6l0xMeOERW9vvHnJC79LHwQDYx7sg-E89_TQVDOqfXKFn7MIqBdFQfJQ6TtaGXw&_nc_zt=24&_nc_ht=scontent-mnl3-1.xx&_nc_gid=9I5v9lLzG8e27YGuoIxnTA&oh=00_Afcxp2tJwvKhHRtjo1KPH0PKkXpnTsJt6HrtgsM70kVhXA&oe=68EBA841",
            name: "Charles Angeles",
            role: "Backend Developer", 
            email: "angeles@gmail.com",
            bio: "Angeles specializes in backend development and database design with expertise in Node.js and Python.",
            skills: ["React", "JavaScript", "CSS", "HTML5"],
            projects: ["PNC API", "Database Optimization"]
        },
        5: {
            avatar: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-1/464988396_1938420756655596_3450023680005361233_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEnqjmA99-WRfXIlBV-Mn2HvKNGKWpPW7O8o0Ypak9bs1Wgskzf_6WYZPYd-J-xQ9o8Q_Y-IkFDrsS5IETgdMj2&_nc_ohc=FTaCAgKahBMQ7kNvwHLhB11&_nc_oc=Admfqx6O33uPfmdQ3Xed6wd95Zxz5RGrhxLA0twunRi9stBh7Sye4KJJ3xnZ0Gw2MII&_nc_zt=24&_nc_ht=scontent-mnl1-1.xx&_nc_gid=K_QrK1JlIaqZSyJX7aMnrQ&oh=00_Afe2d0B3mjhsG_ujS4N2ykzjTp5EFs3fpFR7U7HzGVP15Q&oe=68EBBA33",
            name: "Carl Lawrence Antioquia",
            role: "Backend Developer", 
            email: "antioquia@gmail.com",
            bio: "Antioquia specializes in backend development and database design with expertise in Node.js and Python.",
            skills: ["React", "JavaScript", "CSS", "HTML5"],
            projects: ["PNC API", "Database Optimization"]
        },
        6: {
            avatar: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-1/501441257_2489708721396237_409614570721750130_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGirp4d8YAcbkXO_dRk9ZTBX_GqjyES8Yhf8aqPIRLxiMShBLMTIJqV0oKgo8di556FHpD4nccxu31Cg24yaAfB&_nc_ohc=OZb5sLjTgj8Q7kNvwEmzjpA&_nc_oc=AdncdxGBRDIz3cdmYgHyjY2oVx5V73Fqsj02iY807b4-NmThDYb5Ak6jmrQUJOAaERk&_nc_zt=24&_nc_ht=scontent-mnl1-2.xx&_nc_gid=mnFpDoMQctpg2PpGVyoT0A&oh=00_AfecWI_mwQtD_HroSJDpxiccaBgADSgETfv6tdQ5xwdkjA&oe=68EBBA13",
            name: "Allen Ararao",
            role: "Backend Developer", 
            email: "ararao@gmail.com",
            bio: "Ararao specializes in backend development and database design with expertise in Node.js and Python.",
            skills: ["React", "JavaScript", "CSS", "HTML5"],
            projects: ["PNC API", "Database Optimization"]
        },
        7: {
            avatar: "https://scontent-mnl3-3.xx.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeHAMnfK-EotYnZ0eZ75qBphWt9TLzuBU1Ba31MvO4FTUC1hi7P1N2kBtcCuetH2zUYsSf7SDtU-eajr8ccLhna1&_nc_ohc=pZvdryK-N40Q7kNvwGsriww&_nc_oc=AdnHpM7S_ODNeU2YnVVSlIYmIHgyPXhNWT_YYk4WyAKBy18WmBowm5308TsDOIaJcaA&_nc_zt=24&_nc_ht=scontent-mnl3-3.xx&oh=00_Afc7o7O4zg-UAWCc9WtQnzL1uOqQRSjOtczGt5KmOjl5FA&oe=690D433A",
            name: "Lanz Aerol Ardenio",
            role: "Backend Developer", 
            email: "ardenio@gmail.com",
            bio: "Ardenio specializes in backend development and database design with expertise in Node.js and Python.",
            skills: ["React", "JavaScript", "CSS", "HTML5"],
            projects: ["PNC API", "Database Optimization"]
        }
    };

  const member = teamMembers[memberId];

  // Handle invalid member IDs
  if (!member) {
    return <Navigate to="/about" replace />;
  }

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/about">About</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {member.name}
          </li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-md-4 text-center">
          <img 
            src={member.avatar}
            alt={member.name}
            className="rounded-circle img-fluid mb-3"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
          <h2>{member.name}</h2>
          {/* <p className="text-muted">{member.role}</p> */}
          <p>
            <strong>Email:</strong><br />
            {member.email}
          </p>
        </div>
        <div className="col-md-8">
          <h4>About</h4>
          <p>{member.bio}</p>
          
          {/* <h5 className="mt-4">Skills</h5>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {member.skills.map((skill, index) => (
              <span key={index} className="badge bg-primary">
                {skill}
              </span>
            ))}
          </div> */}

          <h5>Projects</h5>
          <ul>
            {member.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>

          <Link to="/about" className="btn btn-outline-primary mt-3">
            Back to Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;