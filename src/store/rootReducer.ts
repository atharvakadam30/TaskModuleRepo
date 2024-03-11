import { combineReducers } from '@reduxjs/toolkit';
import NewRelease from 'src/requests/Authentication/NewRelease';
import SchoolListslice from 'src/requests/Authentication/SchoolList';
import Staffkidslice from 'src/requests/Authentication/StaffKidLogin';
import {
  default as GallerySlice,
  default as PhotoGallarySlice
} from 'src/requests/PhotoGallery/PhotoGallery';
import Employeeslice from '../requests/Employee/RequestEmployee';
import Holidaysslice from '../requests/Holiday/Holiday';
import Notificationslice from '../requests/Notification/Notification';
import Taskslice from '../requests/Task/RequestTask';

const rootReducer = combineReducers({
  Holidays: Holidaysslice,
  Notification: Notificationslice,
  SchoolList: SchoolListslice,
  NewRelease: NewRelease,
  PhotoGalllary: PhotoGallarySlice,
  Gallery: GallerySlice,
  SchoolSettings: SchoolListslice,
  StaffKidLogin: Staffkidslice,
  Employee: Employeeslice,
  Task: Taskslice

});

export default rootReducer;