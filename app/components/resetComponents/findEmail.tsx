import Parse from 'parse/react-native';

const findEmail = async (): Promise<string> => {
  try {
    const currentUser = Parse.User.current();

    if (!currentUser) {
      throw new Error('No logged-in user found.');
    }

    const currentUsername = currentUser.getUsername();
    const userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo('username', currentUsername);

    const userResults = await userQuery.find();

    if (userResults.length === 0) {
      throw new Error('User not found.');
    }

    const user = userResults[0];
    const currentEmail = user.get('email');

    if (!currentEmail) {
      throw new Error('Email not found.');
    }

    return currentEmail;
  } catch (error) {
    console.error('Error in findEmail():', error);
    throw error;
  }
};



