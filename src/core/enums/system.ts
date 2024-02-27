﻿
export enum ERemoteStatus {
    IDLE,
    BUSY,
    SUCCESS,
    ERROR,
}


export enum EWaitingFor {
    GUEST_TOKEN_API = 1,
    ACCOUNT_LOGIN_API,
    ACCOUNT_GET_USER_INFO,
    ACCOUNT_UPDATE_USER_INFO,
    USER_UPDATE_USER_INFO,
    USER_UPDATE_ROLE,
    USER_RESET_PASSWORD,
    USER_GET_USER,
    ITEM_GET_ITEMS,
    ITEM_GET_ITEM,
    ITEM_TRANSLATE_ITEM,
    ITEM_GET_ITEM_TRANSLATE_JOBS,
    ITEM_GET_ITEM_VERSIONS,
    ITEM_UPDATE_ITEM,
    ITEM_CREATE_ITEM,
    ITEM_CLONE_ITEM,
    ITEM_BUMP_ITEM,
    ITEM_DELETE_DRAFT_ITEM,
    ITEM_PUBLISH_ITEM,
    ITEM_CHANGE_AUTHOR,
    ITEM_GENERATE_ITEMS,
    ITEM_GENERATE_ITEMS_BY_SAMPLE,
    ITEM_BATCH_APPROVE_ITEMS,
    ITEM_BATCH_REJECT_ITEMS,
    ITEM_GET_ITEM_CONTENTS,
    ITEM_GET_DEFAULT_ITEM_CONTENTS,
    ITEM_UPDATE_ITEM_CONTENTS,
    ITEM_CREATE_TAGS,
    ITEM_DELETE_TAGS,
    ITEM_CREATE_OBJECTIVES,
    ITEM_DELETE_OBJECTIVES,
    ITEM_GET_FILTERABLE_ITEMS,
    ITEM_GET_FILTERED_ITEMS,
    QUESTION_GET_EXTRA_DATA,
    RESET_MY_PASSWORD,
    GET_USERS,
    CREATE_USER,
    ACCOUNT_LOGOUT_API,
    SUSPEND_USER,
    ACTIVATE_USER,
    TASK_LIST_ITEM_TASKS,
    TASK_GET_TASK,
    TASK_CREATE_ITEM_TASK,
    TASK_CLONE_ITEM_TASK,
    TASK_BUMP_ITEM_TASK,
    TASK_GET_ASSIGNEES,
    TASK_GET_REVIEWERS,
    TASK_APPROVE_TASK,
    TASK_PUBLISH_TASK,
    TASK_REJECT_TASK,
    TASK_SUBMIT_REVIEW_TASK,
    TASK_CANCEL_REVIEW_TASK,
    TASK_COMPLETE_TASK,
    TASK_CLOSE_TASK,
    TASK_REQUEST_TASK_SESSION,
    TASK_END_TASK_SESSION,
    TASK_RENEW_TASK_SESSION,
    TASK_GET_TASK_SESSION,
    TASK_UPDATE_TASK,
    TASK_GET_COMMENTS,
    TASK_LIST_TASKS,
    TASK_CREATE_COMMENT,
    TASK_UPDATE_ASSIGNEE,
    TASK_UPDATE_REVIEWERS,
    TASK_ASSIGN_CREATE,
    TASK_REVIEW_CREATE,
    TASK_ADD_ASSIGNEES,
    TASK_REMOVE_ASSIGNEES,
    TASK_ASSIGNEE_COMPLETE,
    TASK_ASSIGNEE_REJECT,
    TASK_ASSIGNEE_CANCEL,
    ITEM_QUESTION_LIST_QUESTION,
    ITEM_QUESTION_LIST_SCHEMA,
    ITEM_QUESTION_CREATE_QUESTION,
    MARKING_SCHEME_LIST_MARKING_SCHEME,
    TAG_LIST_TAG,
    TAG_LIST_TAG_GROUP,
    TAG_GET_TAG_GROUP,
    TAG_CREATE_TAG_GROUP,
    TAG_CREATE_TAG,
    TAG_UPDATE_TAG_GROUP,
    TAG_BATCH_ASSIGN_GROUP,
    CURRICULUM_LIST,
    CURRICULUM_LIST_GROUP,
    CURRICULUM_GET_TREE,
    CURRICULUM_LIST_OBJECTIVE_GROUPS,
    CURRICULUM_LIST_OBJECTIVES,
    CURRICULUM_GET_OBJECTIVES,
    PIPELINE_LIST_PIPELINE,
    PIPELINE_GET_PIPELINE,
    PIPELINE_LIST_STAGE,
    PIPELINE_LIST_JOB,
    PIPELINE_GET_JOB,
    TAG_LIST_TAG_SUGGESTION,
    ITEM_PIPELINE_LIST_TASK,
    ITEM_PIPELINE_GET_TASK,
    ITEM_PIPELINE_CREATE_NEW_TASK,
    ITEM_PIPELINE_LIST_PIPELINE,
    ITEM_PIPELINE_GET_PIPELINE,
    ITEM_PIPELINE_LIST_JOB,
    ITEM_PIPELINE_GET_JOB,
    ITEM_PIPELINE_RETRY_JOB,
    ITEM_PIPELINE_STOP_JOB,
    ITEM_PIPELINE_LIST_MESSAGE,
    ITEM_PIPELINE_CREATE_MORE,
    GEOGEBRA_LIST_TEMPLATE,
    GEOGEBRA_LIST_DEFAULT_TEMPLATE,
    GEOGEBRA_CREATE_TEMPLATE,
    GEOGEBRA_UPDATE_TEMPLATE,
    GEOGEBRA_LIST_TTIMAGE_TEMPLATE,
    GEOGEBRA_GET_TTIMAGE_TEMPLATE,
    GEOGEBRA_CREATE_TTIMAGE_TEMPLATE,
    GEOGEBRA_UPDATE_TTIMAGE_TEMPLATE,
    GEOGEBRA_SET_TEMPLATE_DEFAULT,
    GEOGEBRA_CREATE_TTIMAGE,
    GEOGEBRA_CREATE_GRAPH,
    GEOGEBRA_GET_GRAPH,
    GEOGEBRA_LIST_TYPE,
    GEOGEBRA_CREATE_TYPE,
    GEOGEBRA_UPDATE_TYPE,
    SETTING_GET_SUPPORTED_LANGUAGE,
    SETTING_GET_LANGUAGE_SETTING,
}

export enum HttpStatusCode {
    UnexpectedErr = 0,
    HTTPSwitchProto = 100,
    HTTPContinue = 101,
    HTTPProcessing = 102,
    HTTPOkay = 200,
    HTTPCreated = 201,
    HTTPAccepted = 202,
    HTTPNoContent = 204,
    HTTPResetContent = 205,
    HTTPBadReq = 400,
    HTTPUnauth = 401,
    HTTPForbidden = 403,
    HTTPNotFound = 404,
    HTTPMethodNotAllow = 405,
    HTTPNotAcceptable = 406,
    HTTPConflict = 409,
    HTTPGone = 410,
    HTTPUnsupportedMediaType = 415,
    HTTPTeapot = 418,
    HTTPUnprocessableEntity = 422,
    HTTPLocked = 423,
    HTTPFailedDependency = 424,
    HTTPTooEarly = 425,
    HTTPInternalServerErr = 500,
    HTTPNotImplemented = 501,
    HTTPSvrUnavailable = 503,
    ExternalSvrErr = 700,
    InvaildHeader = 800,
    InvalidHeader = 800,
    InvaildParams = 801,
    InvalidParams = 801,
    NoRecordsFound = 802,
}
