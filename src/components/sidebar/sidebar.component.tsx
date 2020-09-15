import React from 'react';
import './sidebar.component.scss';
import {Switch, Route} from 'react-router';
import { HomeComponent } from '../../pages/home/home.component';
import { MainComponent } from '../../pages/main/main.component';

export type SidebarComponentProps = {};

export function SidebarComponent(props: SidebarComponentProps) {

	return (<div>sidebar works!</div>);
}