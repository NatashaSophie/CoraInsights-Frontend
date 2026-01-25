import { gql } from 'graphql-request';

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $birthdate: Date!
    $sex: ENUM_USERSPERMISSIONSUSER_SEX!
    $userType: ENUM_USERSPERMISSIONSUSER_USERTYPE
  ) {
    createUser(
      input: {
        data: {
          name: $name
          username: $email
          nickname: $name
          email: $email
          password: $password
          birthdate: $birthdate
          sex: $sex
          userType: $userType
        }
      }
    ) {
      user {
        id
      }
    }
  }
`;

export const CREATE_TRAIL = gql`
  mutation createTrail(
    $userId: ID!
    $inversePath: Boolean!
    $modality: ENUM_TRAILS_MODALITY!
    $startedAt: DateTime!
  ) {
    createTrail(
      input: {
        data: {
          user: $userId
          inversePaths: $inversePath
          modality: $modality
          startedAt: $startedAt
        }
      }
    ) {
      trail {
        id
      }
    }
  }
`;

export const CREATE_TRAIL_ROUTE = gql`
  mutation createTrailRoute($trailId: ID!, $routeId: ID!) {
    createTrailRoute(input: { data: { trail: $trailId, route: $routeId } }) {
      trailRoute {
        id
      }
    }
  }
`;

export const UPDATE_TRAIL_ROUTE = gql`
  mutation updateTrailRoute($trailRouteId: ID!, $finishedAt: DateTime) {
    updateTrailRoute(
      input: { where: { id: $trailRouteId }, data: { finishedAt: $finishedAt } }
    ) {
      trailRoute {
        id
      }
    }
  }
`;

export const UPDATE_TRAIL = gql`
  mutation updateTrail(
    $trailId: ID!
    $inversePath: Boolean
    $modality: ENUM_TRAILS_MODALITY
  ) {
    updateTrail(
      input: {
        where: { id: $trailId }
        data: { inversePaths: $inversePath, modality: $modality }
      }
    ) {
      trail {
        id
      }
    }
  }
`;

export const DELETE_TRAIL_ROUTE = gql`
  mutation deleteTrailRoute($trailRouteId: ID!) {
    deleteTrailRoute(input: { where: { id: $trailRouteId } }) {
      trailRoute {
        id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $userId: ID!
    $name: String
    $birthdate: Date
    $sex: ENUM_USERSPERMISSIONSUSER_SEX
    $avatar: ID
  ) {
    updateUser(
      input: {
        where: { id: $userId }
        data: { name: $name, birthdate: $birthdate, sex: $sex, avatar: $avatar }
      }
    ) {
      user {
        id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        username
        email
        role {
          id
          name
          type
        }
      }
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword(
    $code: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    resetPassword(
      code: $code
      password: $password
      passwordConfirmation: $passwordConfirmation
    ) {
      user {
        id
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      birthdate
      sex
      userType
      merchantApproved
      merchantApprovedBy {
        id
        name
      }
      merchantApprovedAt
      merchantRejectedReason
      businessName
      businessType
      businessAddress
      businessPhone
      avatar {
        url
      }
      trails {
        id
        inversePaths
        modality
        startedAt
        finishedAt
        certificate {
          file
        }
        routes {
          id
          route {
            id
          }
          finishedAt
          created_at
        }
      }
    }
  }
`;

export const GET_ROUTES = gql`
  query getRoutes {
    trailParts {
      id
      name
      difficulty
      time
      distance
      coverImage {
        url
        width
        height
      }
      description
      slug
      images {
        url
        width
        height
      }
      fromCheckpoint {
        id
        name
        location {
          x
          y
        }
        estabelecimentos {
          id
          name
          address
          email
          phone
          category
          location {
            x
            y
          }
        }
      }
      toCheckpoint {
        id
        name
        location {
          x
          y
        }
        estabelecimentos {
          id
          name
          address
          email
          phone
          category
          location {
            x
            y
          }
        }
      }
    }
  }
`;

export const GENERATE_CERTIFICATE = gql`
  mutation generateCertificate($trailId: ID!) {
    createCertificate(input: { data: { trail: $trailId } }) {
      certificate {
        file
      }
    }
  }
`;

export const UPLOAD = gql`
  mutation upload($file: Upload!) {
    upload(file: $file) {
      id
      url
    }
  }
`;
