CREATE DATABASE IF NOT EXISTS TIME_TRACKER_DEV;
USE TIME_TRACKER_DEV;

CREATE TABLE IF NOT EXISTS USER (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `USERNAME` VARCHAR(15) NOT NULL,
    `FIRST` VARCHAR(40) DEFAULT NULL,
    `LAST` VARCHAR(40) DEFAULT NULL,
    `EMAIL` VARCHAR(55) DEFAULT NULL,
    PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS USER_LOGIN (
    `USER_ID` INT NOT NULL,
    `PASSWORD` VARCHAR(40) NOT NULL,
    FOREIGN KEY (`USER_ID`) REFERENCES USER(`ID`),
    PRIMARY KEY (`USER_ID`)
);

CREATE TABLE IF NOT EXISTS TASKS (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `TITLE` VARCHAR(100) DEFAULT NULL,
    `DESCRIPTION` VARCHAR(250) DEFAULT NULL,
    `PR_SUBMITTED` BIT DEFAULT NULL,
    `PR_REVIEWED` BIT DEFAULT NULL,
    PRIMARY KEY(`ID`)
);

CREATE TABLE IF NOT EXISTS EVENTS (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `USER_ID` INT NOT NULL,
    `TASK_ID` INT NOT NULL,
    `CREATED_ON` DATETIME NOT NULL,
    `LAST_MODIFIED` DATETIME NOT NULL,
    FOREIGN KEY(`USER_ID`) REFERENCES USER(`ID`),
    FOREIGN KEY(`TASK_ID`) REFERENCES TASKS(`ID`),
    PRIMARY KEY(`ID`)
);