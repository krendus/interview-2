import { updateTemplateList, updateLoadingStatus } from '../slice/templateSlice';
import axiosHelper from '../../utils/axiosHelper';

export const getTemplates = () => (dispatch) => {
  dispatch(updateLoadingStatus(true));
  axiosHelper.get('task_templates').then((res) => {
    dispatch(updateTemplateList(res.data));
    dispatch(updateLoadingStatus(false));
  });
};
