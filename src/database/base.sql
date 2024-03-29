-- user table
create table if not exists base_user(
    id int primary key auto_increment,
    username varchar(255) not null,
    password varchar(255) not null,
    avatar varchar(128),
    email varchar(255),
    phone varchar(32),
    create_time datetime default now(),
    update_time datetime default now() on update now(),
    unique (username)
);

-- role table
create table if not exists base_role(
    id int primary key auto_increment,
    name varchar(255) not null,
    create_time datetime default now(),
    update_time datetime default now() on update now(),
    unique (name)
);

-- user role table
create table if not exists base_user_role(
    id int primary key auto_increment,
    user_id int not null,
    role_id int not null,
    create_time datetime default now(),
    update_time datetime default now() on update now(),
    unique (user_id, role_id)
);

-- api log table
create table if not exists base_api_log(
    id int primary key auto_increment,
    user_id int not null,
    api varchar(255) not null,
    method varchar(32) not null,
    request_body text,
    request_query text,
    response_body text,
    spend_time int,
    create_time datetime default now(),
    update_time datetime default now() on update now()
);

-- menu table
create table if not exists base_menu(
    id int primary key auto_increment,
    name varchar(255) not null,
    parent_id int,
    path varchar(255) not null,
    icon varchar(255),
    sort int not null default 0,
    create_time datetime default now(),
    update_time datetime default now() on update now(),
    unique (path)
);

replace into base_user(username, password) value ('root', md5(now()));