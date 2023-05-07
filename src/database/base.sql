-- user table
create table if not exists base_user(
    id int primary key auto_increment,
    username varchar(255) not null,
    password varchar(255) not null,
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