INSERT INTO helo_users (
    user_id,
    username,
    password,
    profile_pic
) 
VALUES ($1, $2, $3, $4)

SELECT * FROM helo_users
WHERE user_id = $1