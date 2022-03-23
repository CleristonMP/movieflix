INSERT INTO tb_user (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana Green', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre(name) VALUES ('Ação');
INSERT INTO tb_genre(name) VALUES ('Aventura');
INSERT INTO tb_genre(name) VALUES ('Comédia');
INSERT INTO tb_genre(name) VALUES ('Romance');

INSERT INTO tb_movie(genre_id, title, sub_Title, year, img_Url, synopsis) VALUES (2, 'Kings Man', 'A Origem', 2021, 'https://cinepop.com.br/wp-content/uploads/2020/07/kingsman-a-origem-696x994.jpeg', 'Um homem precisa correr contra o tempo para impedir que os piores tiranos e criminosos da história exterminem milhões de pessoas e destruam a humanidade.');
INSERT INTO tb_movie(genre_id, title, sub_Title, year, img_Url, synopsis) VALUES (3, 'Ron Bugado', null, 2021, 'https://cdn.ome.lt/7RoJsyfuo1NzeKTbrg_O6TYsWG0=/200x0/smart/extras/capas/ron-bugado-poster.jpg', 'Em um mundo em que robôs que andam, falam e estão conectados digitalmente se tornaram os melhores amigos das crianças, Ron, de 11 anos, descobre que seu amigo robô não funciona muito bem.');
INSERT INTO tb_movie(genre_id, title, sub_Title, year, img_Url, synopsis) VALUES (1, 'The Trip', null, 2021, 'https://cdn.ome.lt/4_QooXimFr5v5xzpUNb7cPxs3EM=/200x0/smart/extras/capas/the_trip.PNG', 'Lars (Aksel Hennie) e Lisa (Noomi Rapace) são um casal que está em crise no seu relacionamento. Eles decidem ir para um chalé isolado, mas não para acertarem as coisas, e sim, tentar matar um ao outro.');

INSERT INTO tb_review(user_id, movie_id, text) VALUES (2, 1, 'O longa se passará durante a Primeira Guerra Mundial e mostrará as origens do grupo de espiões visto nos dois primeiros longas.');
INSERT INTO tb_review(user_id, movie_id, text) VALUES (2, 2, 'Não fosse a pandemia, talvez a premissa de Ron Bugado soasse menos significativa. ');
INSERT INTO tb_review(user_id, movie_id, text) VALUES (1, 3, 'O que parece ser mais um drama com a temática de divórcio se transforma em uma grande chuva de sangue em The Trip. ');






