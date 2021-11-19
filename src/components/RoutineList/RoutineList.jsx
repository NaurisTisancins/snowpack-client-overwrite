import React, { useState, useEffect, useContext } from 'react';
import styles from './styles.module.css';
import { RoutinesContext } from '../../context';

export const RoutineList = () => {
  const { routines, loaded, loading, error, fetchRoutines } = useContext(RoutinesContext);
  
  useEffect(() => {
    if (!loading && !loaded) {
      fetchRoutines()
    }
  }, []);
  
  return (
    <>
      {routines.map((routine) => {
        return {routine}
      })}
    </>
  )
}