import React from 'react';
import PropTypes from 'prop-types';

export const SortButton = ({ current_user, sortSelect }) => {
  let firstNameSorting;
  let lastNameSorting;
  if (current_user && (current_user.admin || current_user.role > 0)) {
    firstNameSorting = (
      <option value="first_name">{I18n.t('users.first_name')}</option>
    );
    lastNameSorting = (
      <option value="last_name">{I18n.t('users.last_name')}</option>
    );
  }

  return (
    <div className="sort-select users">
      <select className="sorts" name="sorts" onChange={sortSelect}>
        <option value="username">{I18n.t('users.username')}</option>
        {firstNameSorting}
        {lastNameSorting}
        <option value="character_sum_ms">{I18n.t('users.characters_added_mainspace')}</option>
        <option value="character_sum_us">{I18n.t('users.characters_added_userspace')}</option>
        <option value="character_sum_draft">{I18n.t('users.characters_added_draftspace')}</option>
        <option value="references_count">{I18n.t('users.references_count')}</option>
      </select>
    </div>
  );
};

SortButton.propTypes = {
  current_user: PropTypes.object.isRequired,
  sortSelect: PropTypes.func.isRequired
};

export default SortButton;
