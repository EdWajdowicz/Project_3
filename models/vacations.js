"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var vacationsSchema = new Schema(
  {
    title: {
      default : "None Specified",
      minLength : 3,
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    heroImage: {
      default : "HeroImage.jpg",
      type: String,
      required: true,
      unique: true
    },
    cuisine: {
      type: String,
      required: true
    },    
    cost: {
      type: Number,
      default: 0,
      min: [0, "Vacation Packages cannot have a negative cost"]
    },
    maxTravelers: {
      type: Number,
      default: 0,
      min: [0,"Vacation packages cannot have a negative number of travelers."],
      max:[25,"Vacation packages cannot have more than 25 travelers."]
    },
    destination: {
      default : "None Specified",
      type: String,
      required: true,
      unique: true
    },
    departureLocation: {
      type: String,
      required: true
    },
    departureDate: {
      default : Date.now,
      type: Date,
      required: true
    },
    returnDate: {
      default: Date.now,
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Vacation", vacationsSchema);
