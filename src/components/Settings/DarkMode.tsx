import * as React from 'react';
import {
  useSetThemeSetting,
  useThemeSetting,
} from '../../context/UserDataContext/properties/simpleProperties';
import RadioList from '../elements/RadioList';

export default function DarkMode() {
  const theme = useThemeSetting();
  const setTheme = useSetThemeSetting();

  return (
    <div>
      <div className="space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          Theme
        </h3>
      </div>
      <div className="h-4" />
      <RadioList
        name="theme"
        options={['light', 'dark', 'system']}
        value={theme}
        onChange={newValue => {
          setTheme(newValue);
        }}
        labelMap={{ light: 'Light Mode', dark: 'Dark Mode', system: 'System' }}
        descriptionMap={{}}
      />
    </div>
  );
}
