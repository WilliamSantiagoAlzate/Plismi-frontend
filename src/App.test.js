//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import App
import App from "./App";

//Import components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//Import views
import CreditCard from "./views/creditCard/CreditCard";
import EditUser from "./views/editUser/EditUser";
import Filter from "./views/filter/Filter";
import Girls from "./views/girls/Girls";
import Home from "./views/home/Home";
import SignIn from "./views/signIn/SignIn";
import SignUp from "./views/signUp/SignUp";
import User from "./views/user/User";

//Do tests
it('Should render all components and views', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);
    const header = wrapper.find(Header);
    const creditCard = wrapper.find(CreditCard);
    const editUser = wrapper.find(EditUser);
    const filter = wrapper.find(Filter);
    const girls = wrapper.find(Girls);
    const home = wrapper.find(Home);
    const signIn = wrapper.find(SignIn);
    const signUp = wrapper.find(SignUp);
    const user = wrapper.find(User);

    expect(footer.exists()).toBeTruthy();
    expect(header.exists()).toBeTruthy();
    expect(creditCard.exists()).toBeTruthy();
    expect(editUser.exists()).toBeTruthy();
    expect(filter.exists()).toBeTruthy();
    expect(girls.exists()).toBeTruthy();
    expect(home.exists()).toBeTruthy();
    expect(signIn.exists()).toBeTruthy();
    expect(signUp.exists()).toBeTruthy();
    expect(user.exists()).toBeTruthy();
});