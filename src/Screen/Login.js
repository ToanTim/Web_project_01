import React, { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavBar from "../Components/NavBarFile/NavBar";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Style/Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, logout } from "../Backend/FirebaseDB";
import { useNavigate } from "react-router";
const Login = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const NavBar_Menus = [
    {
      id: 0,
      type: 1,
      menuTitle: "HOME",
      href: "/",
    },
    {
      id: 1,

      menuTitle: "ABOUT",
      href: "/#about",
    },
    {
      id: 2,

      menuTitle: "FOOD BLOG",
      href: "/food-blog",
    },
    {
      id: 3,

      menuTitle: "RESTAURANT?",
      href: "/restaurant",
    },
    {
      id: 4,

      menuTitle: "CONTACT",
      href: "/#contact",
    },
    {
      id: 5,

      menuTitle: "NEWSLETTER",
      href: "/#new-letter",
    },
  ];
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [authenStatus, setAuthenStatus] = useState(false);
  const navigate = useNavigate();
  //keep signin even refresh page
  const [currentUserNow, setCurrentUserNow] = useState({});

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setError("");
    setJustifyActive(value);
  };

  //auth start
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        // User is signed in.

        setAuthenStatus(true);
        console.log("user is signed in");
      } else {
        // No user is signed in.
        setAuthenStatus(false);

        console.log("user is signed out");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      console.log("Register successfull");
      setAuthenStatus(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const userId = auth.currentUser.uid;
      localStorage.setItem("userId_toantim", auth.currentUser.uid);
      localStorage.setItem("userEmail_toantim", auth.currentUser.email);
      console.log("Login successfull");
      setAuthenStatus(true);

      navigate("/user/" + userId, {
        state: {
          authenStatus: authenStatus,
          userId: userId,
        },
      });
    } catch (error) {
      console.log(error.message);
      setError("Email or password is incorrect");
    }
  };

  return (
    <div className="LoginContainer">
      <div className="LoginNavContainer">
        <NavBar
          NavBar_Menus={NavBar_Menus}
          authenStatus={authenStatus}
          functionOnclick={() => {
            logout();
          }}
        />
      </div>

      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <p style={{ color: "red" }}>{error}</p>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" onClick={login}>
              Sign in
            </MDBBtn>
            <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <MDBInput
              wrapperClass="mb-4"
              label="Name"
              id="form1"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="form1"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div>

            <MDBBtn className="mb-4 w-100" onClick={register}>
              Sign up
            </MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </div>
  );
};

export default Login;
