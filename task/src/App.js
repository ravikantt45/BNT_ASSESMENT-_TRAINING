import React from "react";
import TrafficLight from "./TrafficLight";  
import MultiTabForm from "./MultiTabForm";
import TextTransform from "./TextTransform";
import PasswordStrengthChecker from "./PassordStrengthChecker";
import StarRating from "./StarRating";
import TelephoneFormatter from "./TelephoneFormatter";

export default function App() {
  return (
    <div>
    <h1>Question 1.</h1>
    <TrafficLight />
    <h1>Question 2.</h1>
     <MultiTabForm />
    <h1> Question 3.</h1>
    <TextTransform/>
    <h1> Question 4</h1>
    <PasswordStrengthChecker />
    <h1> Question 5</h1>
    <StarRating/>
    <h1> Question 6</h1>
    <TelephoneFormatter/>
    </div>
  );
}
